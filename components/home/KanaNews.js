import React, { Component } from "react";


class KanaNews extends Component {
    constructor() {
        super();
    }

    render() {
        const lang = this.props.lang;
        const news = this.props.posts.map((page, index) => {
            return (
              
                    <li key={index}>
                    <img src={page._embedded["wp:featuredmedia"][0].source_url} />
                    <h2> {page.title.rendered} </h2>
                    <div className="post-desc"  dangerouslySetInnerHTML={{__html:page.excerpt.rendered}}></div>
                   <a className="button-read-more"  href={`/blog/${page.slug}`}> Leia Mais</a> 
                  
                    </li>
            );
        });


        const newsen = this.props.postsen.map((page, index) => {
            return (
              
                    <li key={index}>
                    <img src={page._embedded["wp:featuredmedia"][0].source_url} />
                    <h2>{page.title.rendered }</h2>
                    <div className="post-desc"  dangerouslySetInnerHTML={{__html:page.excerpt.rendered}}></div>
             
                    <a className="button-read-more"  href={`/en/blog/${page.slug}`}> Read More</a> 
                    </li>
            );
        });


        return (
            <section className="kana-news is-desktop" id="kananews">
            <div className="number">05</div>
              <h1>KanaNews <span>+LAB</span></h1>
              <ul className="kana-news-ul">{lang ? news: newsen}</ul>
              <ul className="numbers">
              <li>01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
              </ul>
            </section>
        );
    }
}

export default KanaNews;