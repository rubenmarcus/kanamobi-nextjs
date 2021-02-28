import React, { Component } from "react";
import FaleConosco from "./FaleConosco";
import Escritorio from "./Escritorio";
import Vagas from "./Vagas";
import TrabalheConosco from "./TrabalheConosco";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import TalkWithUs from "./TalkwithUs";
import WorkWithUs from "./WorkwithUs";

class Contato extends Component {
    constructor() {
        super();
    }


    state = { showing: false };
    render() {
        const lang = this.props.lang;
        const { showing } = this.state;
        return (
            <section className="home__contact" id="contato">
                <div className="contact-first-container is-desktop">
                            <div className={this.state.showing ? 'trabalhe-conosco': null}>
                            <Escritorio escritorio={this.props.escritorio} lang={this.props.lang} />
                            <div className="contact-form contact-first">
                            { lang ? 
                                <FaleConosco> <p>SEJA UM KANAMOBER</p><button onClick={() => this.setState({ showing: !showing })}> Trabalhe Conosco </button></FaleConosco> :
                                <TalkWithUs> <p>BE A  KANAMOBER</p><button onClick={() => this.setState({ showing: !showing })}> Work with Us </button></TalkWithUs>   
                        }
                            </div>
                            { showing ?
                                <div className="work-with-us">
                            <Vagas vagas={this.props.vagas} beKana={this.props.bekanamober} lang={this.props.lang} />
                            <div className="contact-form ">
                            {lang? <TrabalheConosco> <p>TEM ALGUMA DÚVIDA?</p><button onClick={() => this.setState({ showing: !showing })}> Fale Conosco </button></TrabalheConosco> :
                            <WorkWithUs> <p className="doubts">HAVE ANY DOUBTS?</p><button onClick={() => this.setState({ showing: !showing })}> Contact Us</button></WorkWithUs> } 
                            </div>
                            </div>
                            : null
                            }
                            </div>
                            <span className="number">07</span>
                    </div>
                 <div className="is-mobile">
                    <div className="contact-form contact-first">
                    {lang ? 
                    
                        <FaleConosco></FaleConosco>
                        : <TalkWithUs></TalkWithUs>
                    }
                           
                    </div>
                    <div className="office">
                        <Escritorio escritorio={this.props.escritorio} lang={this.props.lang} />
                    </div>
                 </div>           


            </section>

           
        );
    }
}

export default Contato;