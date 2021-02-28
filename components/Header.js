import React, { Component } from "react";
import Head from "next/head";
import stylesheet from 'styles/style.scss'
import fonts from 'styles/fonts.css'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <style dangerouslySetInnerHTML={{ __html: fonts }} rel="preload" />

                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                </Head>
        
        );
    }
}

export default Header;
