import Layout from "components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "components/PageWrapper.js";
import Menu from "components/Menu.js";
import Home from "components/home/Home.js";
import Sliders from "components/home/Sliders";

import QuemSomos from "components/home/QuemSomos.js";
import EcoSistema from "components/home/Ecosistema.js";
import KanaNews from "components/home/KanaNews.js";
import Contato from "components/home/Contato.js";
import Clientes from "components/home/Clientes.js";
import Cases from "components/home/Cases.js";
import Social from "components/home/Social.js";
import Head from 'next/head'
import LazyLoad from 'react-lazyload';
import Helmet from 'react-helmet';




class Index extends Component {


    constructor(props) {
        super(props);
        this.state = {
            portuguese: true,
            appClass: 'default'
          };

          
    }    
    
    noScroll = (CssClass) => {
        this.setState({appClass: CssClass});
    }

    render() {
        return (
            <div className="application">
            <Head>
      
            <title>Kanamobi - Home</title>
            <link rel="canonical" href="https://www.kanamobi.com.br" />
            <link rel="shortcut icon" href="/static/images/favicon.png" />
           </Head>
           <Helmet>
           <body className={this.state.appClass} />
         </Helmet>
            <Layout>
                    <div className="language-choice">
                    <span onClick={() => this.setState({ portuguese: false })}>EN</span>
                    <span  onClick={() => this.setState({ portuguese: true })}>PT</span>
                </div>
                <Home>
                  <Menu menu={this.props.Menu}  en={this.props.enMenu}   lang={this.state.portuguese}/>
                 
                  <Social links={this.props.Social} />
                  <Sliders slider={this.props.Sliders}   lang={this.state.portuguese} />
                </Home>
                <LazyLoad height={1200}>
                <QuemSomos gallery={this.props.QuemSomosGallery} quemsomos={this.props.QuemSomos} lang={this.state.portuguese} />
                </LazyLoad>
                <LazyLoad height={1200}>
                <EcoSistema  bodynoScroll={this.noScroll} info={this.props.Ecossistema} Ecoin={this.props.EcossistemaIn} lang={this.state.portuguese}   />
                </LazyLoad>
                <LazyLoad height={1200}>
                <Cases bodynoScroll={this.noScroll} stories={this.props.Cases} destaque={this.props.CasesDest} info={this.props.Success}  lang={this.state.portuguese}  />
                </LazyLoad>
                <LazyLoad height={1200}>
                <KanaNews posts={this.props.Blog} postsen={this.props.BlogEN} lang={this.state.portuguese} />
                </LazyLoad>
                <LazyLoad height={1200}>
                <Clientes  logos={this.props.Clients}  lang={this.state.portuguese}  />
                </LazyLoad>
                <LazyLoad height={1200}>
                <Contato vagas={this.props.Vagas} escritorio={this.props.Escritorio} lang={this.state.portuguese}  bekanamober={this.props.BeKanamober} />
          
                </LazyLoad>
                </Layout>
           
            </div>
        );
    }
}

export default PageWrapper(Index);
