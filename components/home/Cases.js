import React, { Component } from "react";
import Slider from "react-slick";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class Cases extends Component {
    constructor() {
        super();
        
        this.state = {
            filterListShow: false,
            filterCaseShow: false,
            active: false,
            galleryopen:false,
          }
          this.showGallery = this.showGallery.bind(this);
          this.hideGallery = this.hideGallery.bind(this);
          this.hideCase = this.hideCase.bind(this);
          this.hideCaseIn = this.hideCaseIn.bind(this);
          this.myRef=null  

    }
    hideGallery() {
        this.setState({
         active: false,
         filterListShow: false
        })
        this.props.bodynoScroll('');  
      }

      nextSlide = () =>{
        this.casesSlider.slickNext();

    }

    showGallery() {
        this.setState({
         active: true,
         filterListShow: false
        })

        this.props.bodynoScroll('noScroll');   
        this.scrollToMyRef();
      }
 
      showCase(id) {
        const currentmessage = this.props.stories.filter(stories => stories.id === id);
        this.setState({ filterListShow: currentmessage });
      }

      showCaseIn(id) {
        const currentmessage = this.props.stories.filter(stories => stories.id === id);
        this.setState({ filterCaseShow: currentmessage,    active: false, });
        this.props.bodynoScroll('noScroll');   
        this.scrollToMyRef();
      }

      hideCase() {
        this.setState({
        active: true,
         filterListShow: false
        })
        
        this.props.bodynoScroll('');  
      }

      hideCaseIn() {
        this.setState({
        active: false,
         filterCaseShow: false
        })
        
        this.props.bodynoScroll('');  
      }

      scrollToMyRef = () => {   // run this method to execute scrolling. 
        window.scrollTo({
            top:this.myRef.offsetTop, 
            behavior: "smooth"   // Optional, adds animation
        })
    }

      afterChangeHandler(currentSlide) {
        this.props.updateInitialSlide(currentSlide);
        }

    render() {
        const { filterListShow } = this.state
        const { filterCaseShow } = this.state
        const { galleryopen } = this.state
        const lang = this.props.lang

        const settingsVer = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function(currentSlide, nextSlide) {
              //console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
             // console.log("after change", currentSlide);
            }
          };


          const galsettings = {
            infinite: true,
            speed: 500,
            rows: 3,
            slidesToShow:3,
            speed: 200,
            slidesPerRow: 1,
        arrows:true,
        infinite: true,
        centerPadding: '0px',
          };

        const settings = {
            infinite: true,
            speed: 500,
            fade:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:true,
            customPaging: (i) => {

                if(i < 9 ) {
                    return <div><span>0 {i + 1}</span> <span> 0{this.props.stories.length}</span></div>;
                } else {

                    return <div><span> {i + 1}</span> <span>{this.props.stories.length}</span></div>;

                }
               
              },
              appendDots: dots => (
            
                  <ul> {dots}      </ul>
              ),
          };

          const galsettingsMobile = {
            infinite: true,
            speed: 500,
            rows: 3,
            slidesToShow:1,
            speed: 200,
            slidesPerRow: 1,
        arrows:true,
        infinite: true,
        centerPadding: '0px',
          };

        


        const casesInfo  =  this.props.info.map((info, index) => {
            return (
                <div  key={index}  className="cases-info">
                <h1>Success Stories</h1>
                <span className="cases-info-subtitle">{lang? info.acf.subtitle : info.acf.subtitle_en }</span>
                <div  className="cases-info-desc">     {lang? info.acf.desc : info.acf.desc_en }</div>
                <a  className="button-cases-desc" href="#contato">  {lang?  info.acf.buttonlabel :  info.acf.buttonlabel_en }</a>
                </div>
            );
        });


        const gallery  =  this.props.stories.map((stories, index) => {
            return (
                <div key={index} className="gallery-case" onClick={()=> this.showCaseIn(stories.id)}>
                <img src={stories._embedded["wp:featuredmedia"][0].source_url}></img>
                <span className="casesgallery-title">{stories.title.rendered}</span>
                </div>
            );
        });

        const CasesOut = this.props.stories.map((destaque, index) => {
            const bgSlider = destaque.acf.imagem_destaque_mobile;
            return (
               
                <div  key={index} className="case-destaque">
        
               <div className="legenda-foto is-desktop"> <span>{destaque.acf.legenda_foto} </span> </div>
                <button className="cases-see-more is-desktop" onClick={()=> this.showCaseIn(destaque.id)}></button>
                <div className="cases-cliente-img is-desktop">     <img src={destaque.acf.imagem_cliente} /></div>
             

                <img src={destaque.acf.imagem_galeria} className="cliente-destaque-img is-desktop" />
                <div className="case-destaque-mobile-container" style={{backgroundImage: `url(${bgSlider})`}}>
              
                <button className="cases-see-more is-mobile" onClick={()=> this.showCaseIn(destaque.id)}></button>
                <div className="cases-cliente-img is-mobile">    <img src={destaque.acf.imagem_cliente} />  </div>
                    <button className="bt-mobile-slider-cases is-mobile" onClick={this.nextSlide}>MOBILE</button>

                </div>

                </div>
            );
        });


        const CasesIn = this.props.stories.map((stories, index) => {

            return (
                <div  key={index} >
                <div className="casesIn-close" onClick={this.hideCase}> X</div>
               <div className="casesIn-title">
                    <img src={stories.acf.imagem_cliente} />
                    <h1>{lang? stories.acf.titulo_do_projeto : stories.acf.titulo_do_projeto_en}</h1>
               <div clasName="casesIn-desc">
                    <label>{lang? stories.acf.label_1 : stories.acf.label_1_en}</label> 
                    <span>{ lang? stories.acf.descricao_label_1 : stories.acf.descricao_label_1_en}</span>

                    <label>{lang? stories.acf.label_2 : stories.acf.label_2_en}</label> 
                    <span>{lang? stories.acf.descricao_label_2 : stories.acf.descricao_label_2_en}</span>

                    <label>{lang?  stories.acf.label_3 :  stories.acf.label_3_en}</label> 
                    <span>{lang?  stories.acf.descricao_label_3 :  stories.acf.descricao_label_3_en}</span>

                    <label>{lang? stories.acf.label_4 : stories.acf.label_4_en}</label> 
                    <span>{lang? stories.acf.descricao_label_4 : stories.acf.descricao_label_4_en}</span>
                    </div>
                 </div>
             </div>
            );
        });


        return (
            <section className="cases" id="cases"  ref={ (ref) => this.myRef=ref }>
             <ul className="numbers">
                <li>
                01 </li>
                <li>
                02 </li>
             </ul>
                <div className="number">04</div>
                  <div className="cases-wrapper">
                  <div className="case-destaque">
                  <button className="gallery-button is-desktop " onClick={this.showGallery}>  <i></i> {lang?  'Galeria' : 'Gallery' }  </button>

                  <Slider   ref={casesSlider => { this.casesSlider = casesSlider; }}  {...settings} >

                            {CasesOut}
                      </Slider>
                      </div>
                            {casesInfo}
                         
                     </div>
                    <div  className={this.state.active ? 'galeria-in-active is-desktop': null}>
                       <div className="gallery-wrapper">
                             <div className="gallery-close" onClick={this.hideGallery}> </div>
                             <Slider {...galsettings}>
                             {gallery}
                             </Slider>
                       </div>
                    </div>
                       <div  className={this.state.active ? 'galeria-in-active is-mobile': null}>
                       <div className="gallery-wrapper">
                             <div className="gallery-close" onClick={this.hideGallery}> </div>
                             <Slider {...galsettingsMobile}>
                             {gallery}
                             </Slider>
                       </div>
                    </div>
                    {filterListShow ? (
                        <div className="casesIn-in">
                        {filterListShow.map((stories, index)  => (
                            <div  key={index} >
                            <div className="casesIn-close" onClick={this.hideCase}></div>
                            <div className="casesIn-title">
                            <div className="casesIn-logo">
                            <img src={stories.acf.imagem_cliente} />
                            </div>
                            <div className="casesIn-project">
                                 <h1>{lang? stories.acf.titulo_do_projeto : stories.acf.entitle}</h1>
                            </div>
                                </div>
                                <ul className="casesIn-desc">
                                <Slider {...settingsVer}>
                                    <li className="casesIn-desc-first">
                                    <span>{lang?  stories.acf.descricao_principal : stories.acf.descricao_principal_en}</span>
                                    </li>
                                    <li className="casesIn-first-label">
                                    <label>{lang?  stories.acf.label_1 : stories.acf.label_1_en}</label> 
                                    <span>{lang?  stories.acf.descricao_label_1 : stories.acf.descricao_label_1_en}</span>
                                    </li>
                                    <label>{lang? stories.acf.label_2 : stories.acf.label_2_en }</label> 
                                    <span>{lang? stories.acf.descricao_label_2 :  stories.acf.descricao_label_2_en }</span>
                                    <li>
                                    <label>{lang? stories.acf.label_3 : stories.acf.label_3_en}</label> 
                                    <span>{lang? stories.acf.descricao_label_3 : stories.acf.descricao_label_3_en}</span>
                                    </li>
                                    <li>
                                    <label>{lang? stories.acf.label_4 : stories.acf.label_4_en}</label> 
                                    <span>{lang? stories.acf.descricao_label_4 : stories.acf.descricao_label_4_en}</span>
                                    </li>
                                     </Slider>
                                     </ul>
                         </div>
                          ))}
                        </div>
                      ) : null }


                      {filterCaseShow ? (
                        <div className="casesIn-in">
                        {filterCaseShow.map((stories, index)  => (
                            <div  key={index} >
                            <div className="casesIn-close" onClick={this.hideCaseIn}></div>
                           <div className="casesIn-title">
                            <div className="casesIn-logo">
                            <img src={stories.acf.imagem_cliente} />
                            </div>
                            <div className="casesIn-project">
                                <h1>{lang? stories.acf.titulo_do_projeto : stories.acf.entitle}</h1>
                                </div>
                                </div>
                           <ul className="casesIn-desc">
                           <Slider {...settingsVer}>
                                <li className="casesIn-desc-first">
                                <span>{lang?  stories.acf.descricao_principal : stories.acf.descricao_principal_en}</span>
                                </li>
                                <li className="casesIn-first-label">
                                <label>{lang?  stories.acf.label_1 : stories.acf.label_1_en}</label> 
                                <span>{lang?  stories.acf.descricao_label_1 : stories.acf.descricao_label_1_en}</span>
                                </li>
                                <label>{lang? stories.acf.label_2 : stories.acf.label_2_en }</label> 
                                <span>{lang? stories.acf.descricao_label_2 :  stories.acf.descricao_label_2_en }</span>
                                <li>
                                <label>{lang? stories.acf.label_3 : stories.acf.label_3_en}</label> 
                                <span>{lang? stories.acf.descricao_label_3 : stories.acf.descricao_label_3_en}</span>
                                </li>
                                <li>
                                <label>{lang? stories.acf.label_4 : stories.acf.label_4_en}</label> 
                                <span>{lang? stories.acf.descricao_label_4 : stories.acf.descricao_label_4_en}</span>
                                </li>
                                </Slider>
                                </ul>

                         </div>
                          ))}
                        </div>
                      ) : null }

            </section>
        );
    }

}
export default Cases;
