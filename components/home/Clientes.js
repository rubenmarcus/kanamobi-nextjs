import React, { Component } from "react";
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';


class Clientes extends Component {
    constructor() {
        super();
    }

    render() {

        const lang = this.props.lang;



        const settings = {
            infinite: true,
            speed: 500,
            rows: 3,
            slidesToShow: 6,
            speed: 500,
            slidesPerRow: 1,
        arrows:true,
        infinite: true,
          
          };

          const settingsMobile = {
            infinite: true,
            speed: 500,
            rows: 6,
            slidesToShow: 1,
            speed: 500,
            slidesPerRow: 1,
        arrows:true,
        infinite: true,
          
          };


        const clientsIdx = this.props.logos.map((page, index) => {
            return (
              
                    <div  key={index}>
                    <LazyLoad height={300}>
                    <img src={page}  rel="preload" as="image" />
                    </LazyLoad>
                    </div>
               
            );
        });


        return (
            <section className="home__forth clientes" id="clientes">
            { lang ?
                <h1>Clientes</h1>
                : <h1>Clients</h1>
            }
              <div className="clientes-logos is-desktop">
              <Slider {...settings}>  
                    {clientsIdx}
            </Slider>
                </div>
                <div className="clientes-logos is-mobile">
                <Slider {...settingsMobile}>  
                      {clientsIdx}
              </Slider>
                  </div>



              <div className="number is-desktop">06</div>
              <ul className="numbers ">
              <li>01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
              <li>05</li>
              </ul>

          

            </section>
        );
    }
}

export default Clientes;
