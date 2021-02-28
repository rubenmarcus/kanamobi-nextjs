import Layout from "components/Layout.js";
import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "components/PageWrapper.js";
import Menu from "components/Menu.js";
import { Config } from "config/config.js";
import {Helmet} from "react-helmet";


class Category extends Component {
    static async getInitialProps(context) {
        const { slug } = context.query;
        const categoriesRes = await fetch(
            `${Config.apiUrl}/wp/v2/categories?slug=${slug}`
        );
        const page_url = 'https://www.kanamobi.com.br/category/';
        const categories = await categoriesRes.json();
        if (categories.length > 0) {
            const postsRes = await fetch(
                `${Config.apiUrl}/wp/v2/posts?_embed&categories=${
                    categories[0].id
                }`
            );
            const posts = await postsRes.json();
            return { categories, posts , page_url };
        }
        return { categories, page_url };
    }
    render() {
        if (this.props.categories.length == 0)
            return <Error statusCode={404} />;

        const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=post`}
                        >
                            <a>{post.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });
        return (
            <div className="application">
            <Helmet>
                <title>Kanamobi - {this.props.categories[0].name} </title>
                <link rel="canonical" href={this.props.page_url + this.props.categories[0].slug} />
            </Helmet>
            <Layout>
                <Menu menu={this.props.Menu} />
                <h1>{this.props.categories[0].name} Posts</h1>
                {posts}
            </Layout>
            </div>
        );
    }
}

export default PageWrapper(Category);
