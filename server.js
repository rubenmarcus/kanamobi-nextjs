const express = require("express");
const next = require("next");
const nextConfig = require('./next.config');
const bodyParser = require('body-parser')

const compression = require('compression')

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev ,dir: __dirname, conf: nextConfig });
const handle = app.getRequestHandler();
const mailer = require('./mailer')

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(compression())
        server.use(bodyParser.json())
        server.get("/blog/:slug", (req, res) => {
            const actualPage = "/post";
            const queryParams = { slug: req.params.slug };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/en/blog/:slug", (req, res) => {
            const actualPage = "/post-en";
            const queryParams = { slug: req.params.slug };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/_preview/:id/:wpnonce", (req, res) => {
            const actualPage = "/preview";
            const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
            app.render(req, res, actualPage, queryParams);
        });
        server.get("/en", (req, res) => {
            const actualPage = "/index-en";
            app.render(req, res, actualPage);
        });


        server.post('/api/contact', (req, res) => {
            console.log(req.body);


            const {  name,message,tel,email } = req.body
        
            mailer({ name, msg: message, tel,email }).then(() => {
              console.log('success')
              res.send('success')
            }).catch((error) => {
              console.log('failed', error)
              res.send('badddd')
            })
          });


        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
