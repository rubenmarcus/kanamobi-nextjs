import React, { Component } from "react";
import Slider from "react-slick";


class QuemSomos extends Component {
    constructor() {
        super();
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:true,
            customPaging: i => (
                <button
                >
                 0 {i + 1}
                </button>
              ),
              appendDots: dots => (
            
                  <ul> {dots} </ul>
              ),
          };
        const QuemSomosImg = this.props.gallery.map((img, index) => {
            return (
                     <li  key={index}>
                    <img src={img} />
                    </li>
            );
        });
        



        const lang = this.props.lang;

        
    

        const QuemSomos = this.props.quemsomos.map((qs, index) => {
            const TimeLine = qs.acf.TimeLine
            const TimelineRes = Object.keys(TimeLine).map((key, index) =>
            
                <ul  key={index} className={'year-'+  TimeLine[key].year}>
                 <li className="qs-timeline-year">{TimeLine[key].year}</li>
                 <li className="qs-timeline-release">{TimeLine[key].release}</li>
                 </ul>
            
            );

            const TimeLineen = qs.acf.TimeLine_en
            const TimelineenRes = Object.keys(TimeLineen).map((key, index) =>
            
                <ul  key={index} className={'year-'+  TimeLineen[key].year}>
                 <li className="qs-timeline-year">{TimeLineen[key].year}</li>
                 <li className="qs-timeline-release">{TimeLineen[key].release}</li>
                 </ul>
            
            );

            return (
                    <div className="qs-home"  key={index} >
                    <div className="qs-gallery-mobile is-mobile">
                    <Slider {...settings}>
                                 <img src={qs.acf.mobile_image} />
                                 <img src={qs.acf.mobile_image_2} />
                                 </Slider>

                    </div>
                  
                    { lang ?
                        <div className="qs-timeline is-desktop" >    {TimelineRes} </div>
                        
                        : 
                     
                        <div className="qs-timeline is-desktop" >      {TimelineenRes} </div>
                    }


                    { lang ?
                    <div className="qs-title"> <h2>{qs.acf.subtitle}</h2></div> :
                    <div className="qs-title"> <h2>{qs.acf.subtitulo}</h2></div>
                    }

                    { lang ?
                        <div className="qs-desc" dangerouslySetInnerHTML={{__html: qs.excerpt.rendered}}></div> :


            <div className="qs-desc" dangerouslySetInnerHTML={{__html: qs.acf.english_content}}></div> 
                    }
                    
                    { lang ?
                        <div className="qs-sum">
                                     <p>  {qs.acf.Sumário} </p>
                                        <p> <b>{qs.acf.sumario_destaque}</b></p> </div> :

                                        <div className="qs-sum">
                                        <p>  {qs.acf.Summary} </p>
                                           <p> <b>{qs.acf.toc}</b></p> </div>

                        }
                    <ul className="numbers is-mobile">
                        <li>01</li>
                        <li>02</li>
                    </ul>
                       
                    </div>
            );
        });


        const Label = this.props.quemsomos.map((qs, index) => { 

            const enLabel = qs.acf.image_label;
            const ptLabel = qs.acf.label_da_imagem;
            return (
                    <div  key={index}>
                    { lang ?
                     
                        <div  className="office">{ptLabel} </div>
                        : 
                        <div className="office en"> {enLabel} </div>  
                    }
                    </div>
                );
        });

        return (
            <section className="home__second" id="quemsomos">

            { lang ?
                <h1>Quem Somos</h1>
            :    <h1>About Us</h1>
            }
         
              <div className="number is-desktop">02</div>
              {Label}
              <div className="quemsomos-desc ">
                {QuemSomos}
              </div>
            <div className="quemsomos-gallery is-desktop">
            <Slider {...settings}>
            {QuemSomosImg}
            </Slider>
 
            </div>
            </section>
        );
    }
}

export default QuemSomos;
