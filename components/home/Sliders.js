import React, { Component } from "react";

import Slider from "react-slick";



class Sliders extends Component {
    constructor() {
        super();
      

    }
    
    renderContent = () => {

        const lang = this.props.lang;

        const settings = {
            infinite: true,
            speed:2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: -1,
            useTransform:false,
            autoplay: true,
            autoplaySpeed:8000,
          };

          
        const slidersOut = this.props.slider.map((slider, index) => {
            const classSlider = 'slider-'+ index;
            const bg = slider._embedded["wp:featuredmedia"][0].source_url;
            return (
                <div  key={index} className={classSlider}>
                <div  className="slider-bg" style={{backgroundImage: `url(${bg})`}}></div>
                    <div   className="slider-title">   <h1>
                    
                    {lang? slider.title.rendered : slider.acf.entitle }</h1></div>
                        {lang? <div className="slider-desc" dangerouslySetInnerHTML={{__html: slider.content.rendered}}></div> :
           
                        <div className="slider-desc" dangerouslySetInnerHTML={{__html: slider.acf.english_content}}></div> 
                    }
                   </div>
                  
            );
        });



        return     <div className="sliders">
        <div className="number">01</div>
        <div className="sliders-Out">
        
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
        <Slider {...settings}>

              {slidersOut}

              </Slider>
        </div>
        <ul className="numbers ">
              <li>01</li>
              <li>02</li>
              <li className="is-desktop">03</li>
              <li className="is-desktop">04</li>
              <li className="is-desktop">05</li>
              </ul>
         </div>
    }

    render() {
        return this.renderContent();
    }

}

export default Sliders;
