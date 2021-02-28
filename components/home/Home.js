import React, { Component } from "react";


const Home = props => (
    <section className="home__first" id="home">
    <header>
         <a href="/"><img src="/static/images/logo.png" /> </a>
     </header>

     <div className="home__first-sliders">
     {props.children} 
    </div>
</section>
);

export default Home;
