import Layout from "components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "components/PageWrapper.js";
import Menu from "components/Menu.js";
import { Config } from "config/config";
import Head from 'next/head';
import Home from "components/home/Home.js";
import Social from "components/home/Social.js";
import stylesheet from 'styles/style.scss'
import moment from 'moment';


class PostEN extends Component {
    static async getInitialProps(context , pathname) {
        const { slug, order } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/postlight/v1/post?slug=${slug}`
        );
        const post = await res.json();

        const postsFetch =  await fetch(
            `${Config.apiUrl}/wp/v2/posts`
        )


        const posts = await postsFetch.json();
        const resAuthor =  await fetch(
            `${Config.apiUrl}/wp/v2/users/${post.author}`
        );

        const author = await resAuthor.json();



        const page_url = 'https://www.kanamobi.com.br/blog/';
        const tags = post.tag_names;      
      
    
        return { post, page_url, author, tags, posts,slug};
    }

    constructor(props) {
        super(props);
        this.state = {
            portuguese: false
          };
    }   

    render() {
  
       
       
        const postsFilter = this.props.posts.map((posts, index) => {
            const idxFloat = parseFloat(index);
            const numberF = idxFloat + 1;
            const numberIdx = '0' + numberF;
          
            if(this.props.post.id === posts.id){

              return(<div className="number" key={index}> {numberIdx}
                </div>)  
            }
         
        });

        if (!this.props.post.title) return <Error statusCode={404} />;

        const postUrl = `https://www.kanamobi.com.br/blog/${this.props.slug}`;
        const linkLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${this.props.post.title.rendered}&summary=&source=`;
        const linkFace = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`
        const linkTwitter = `https://twitter.com/home?status=${postUrl}`
        const postDate =  moment(this.props.post.date).format('DD/MM/YYYY');


        return (
            <div className="application kana-blog">
            <Head>
            <title>Kanamobi - {this.props.post.title.rendered}</title>
            <link rel="shortcut icon" href="/static/images/favicon.png" />
            <link rel="canonical" href={this.props.page_url + this.props.post.slug} />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

            </Head>
            <Layout>
            <Home>
            <div className="grid">
            <div className="grid-line grid-line-1">
            </div>
            <div className=" grid-line grid-line-2">
            </div>
            <div className="grid-line grid-line-3 is-desktop">
            </div>
            <div className="grid-line grid-line-4 is-desktop">
            </div>
            <div className="grid-line grid-line-5 is-desktop">
            </div>
             </div>
             <Menu menu={this.props.Menu}  en={this.props.enMenu} lang={this.state.portuguese} />

          </Home>
          <div className="blog-share">
          
            <p>SHARE</p>

            <a href={linkLinkedin} className="ico-Linkedin" target="blank" >
               
            </a>

            <a href={linkFace}  className="ico-Facebook" target="blank" >
               
            </a>
            <a href={linkTwitter}  className="ico-Twitter" target="blank" >
               
            </a>
          </div>
          <div className="blog-main">

                <img src={this.props.post.acf.imgdestaque} className="img-destaque"   />        
              
               <div className="blog-container">
               
               <h1>{this.props.post.title.rendered}</h1>
               <div className="posted-on"> PUBLISHED AT {postDate}</div>
               <div className="post-content"
                   dangerouslySetInnerHTML={{
                       __html: this.props.post.content.rendered
                   }}
               />
               
               </div>
              
                {postsFilter}  
         
               <div className="post-tags-container">
               <p>Tags</p>
               <div>
               {this.props.tags.map(function(d, idx){
                  return (<div   className="tag-names"  key={idx}>{d}</div>)
                })}
               </div>
               </div>
                <div className="blog-details">
               <img src={this.props.author.acf.avatarsite} />
               <div className="post-author"> ARTICLE WRITTEN BY: {this.props.author.name} </div>
              <div className="post-author-desc">  {this.props.author.description}</div>
                </div>
                    </div>
            </Layout>
            </div>
        );
    }
}

export default PageWrapper(PostEN);
