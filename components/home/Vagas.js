import React, { Component } from "react";
import Slider from "react-slick";
import {ReactHeight} from 'react-height';



class Vagas extends Component {
    constructor() {
        super();
        this.state = {
            filterListShow: false,
            active: false,
            
            newHeight:0,
            height: 0,
          }
          this.handleShowFilterList = this.handleShowFilterList.bind(this)
          this.removeActiveClass= this.removeActiveClass.bind(this);
        //  this.handleShowFilterList = this.handleShowFilterList.bind(this)
    }
    handleShowFilterList(id) {
        const currentmessage = this.props.vagas.filter(vagas => vagas.id === id);
        this.setState({ filterListShow: currentmessage });
        this.setState({
            active: true
           })
      }
      removeActiveClass() {
        this.setState({
         active: false,
         filterListShow: false
        })
      }

      GoDown = () =>{
        this.btnup.removeAttribute("disabled");
   //   this.setState({height: this.state.height + 30})
     // console.log(this.state.height , 'Height Down');
      if (  this.state.height < 0 ) {
          this.setState({height: this.state.height + 220})
        } else {
          this.btndown.setAttribute("disabled", "disabled");

        }
    }
    GoUp= () =>{
     
        const HeightLimit = - this.state.newHeight + 100;
       // console.log('NH 1',HeightLimit  , HeightLimit > this.state.height);
         // console.log(this.state.height);
          this.btndown.removeAttribute("disabled");
        if (HeightLimit < this.state.height  ) {
          this.setState({height: this.state.height - 220})
        } else {
          this.btnup.setAttribute("disabled", "disabled");

        }
    }
    render() {




        const { filterListShow } = this.state
        const lang = this.props.lang;
     
       

        const settings = {
            speed: 500,
            rows: 2,
            infinite: true,
            slidesPerRow: 1, 
            initialSlide:1 };

        const VagasOut = this.props.vagas.map((vagas, index) => {
            const classVaga = 'vagas-list-in ' + '' + 'vaga-'+ index;
            let vagaId = vagas.id; 
            let vagaNumber = index + 1;
            return (
              
               
                <li className={classVaga} key={index}>
               
                    <div className="vaga-title">   <span>0 {vagaNumber}</span>  <h1>{lang? vagas.title.rendered : vagas.acf.entitle}</h1></div>
                        {lang? <div className="vaga-desc" dangerouslySetInnerHTML={{__html: vagas.content.rendered}}></div> :
                        <div className="vaga-desc" dangerouslySetInnerHTML={{__html: vagas.acf.english_content}}></div>
                        }

                        <button key={vagas.id}  onClick={()=> this.handleShowFilterList(vagas.id)}>
                        {lang? 'CANDIDATE-SE' : 'APPLY' } 
                      </button>
                 
                     
                   </li>
            );
        });
        const beKana = this.props.beKana.map((beKana, index) => { 
            return (
              
            <div key={index} >
            <ReactHeight onHeightReady={value => this.setState({newHeight: value})}>

            <div className="kana-title">  {lang? <h1>COMO É SER <br />UM KANAMOBER</h1> : <h1>HOW IS TO BE <br />a KANAMOBER</h1> } </div>
         <div className="kana-offset">
         {lang? <div   style={{position:'relative',top: `${this.state.height}px`}} className="kana-desc" dangerouslySetInnerHTML={{__html: beKana.content.rendered}}></div> :
             <div className="kana-desc"    style={{position:'relative',top: `${this.state.height}px`}} dangerouslySetInnerHTML={{__html: beKana.acf.english_content}}></div> 
        } 
        </div>
        </ReactHeight>

        <button className="goDown"   ref={btndown => { this.btndown = btndown; }}  onClick={this.GoDown}>Down</button>
<button className="goUp"  ref={btnup => { this.btnup = btnup; }}  onClick={this.GoUp}>Up</button>
            </div>
            );
        });

        const VagasIn = this.props.vagas.map((vagas, index) => { 

            <div   key={index} className={vagas.id}>
            <div className="vaga-title">   <h1>{lang ? vagas.title.rendered : vagas.acf.entitle}</h1></div>
            {lang? <div className="vaga-desc" dangerouslySetInnerHTML={{__html: vagas.content.rendered}}></div>
             : <div className="vaga-desc" dangerouslySetInnerHTML={{__html: vagas.acf.entitle}}></div> }
            </div>
        });
        return (
            <div className="vagas">
            <div  className={this.state.active ? 'vaga-in-active': null}>
          <ul className="vagas-list">
         {lang?  <h1> VAGAS</h1> : <h1 className="job-positions">JOB POSITIONS</h1>}
         <Slider {...settings}> 
          {VagasOut}
          
            </Slider>
          </ul>
           <div className="be-kana-in"> 
            { beKana }
            
            
            
            </div>
            {filterListShow ? (
                <div className="vagas-in">
                {filterListShow.map((vagas, index)  => (
                    <div  key={index} className={vagas.id}>
                    <div className="close-vaga" onClick={this.removeActiveClass}></div>
                    <div className="vaga-title"> 
                      <span className="vaga-in-title">{lang? 'VAGA' : 'POSITION'}</span>          
                    <h1>{lang? vagas.title.rendered : vagas.acf.entitle}</h1></div>
                    {lang ?      <div className="vaga-desc" dangerouslySetInnerHTML={{__html: vagas.content.rendered}}></div> :
                
                    <div className="vaga-desc" dangerouslySetInnerHTML={{__html: vagas.content.entitle}}></div>
                }
               
                    <div className="vaga-details">

                    {lang?

                        <h1>REQUISITOS</h1> :  <h1>REQUERIMENTS</h1> 
                        
                    }

                    {lang?
                       <div className="vaga-requisitos"   dangerouslySetInnerHTML={{__html: vagas.acf.requisitos}}></div> :

                       <div className="vaga-requisitos"   dangerouslySetInnerHTML={{__html: vagas.acf.requisitos_en}}></div>
                    }

                     {lang?

                        <h1>BENEFÍCIOS</h1> :  <h1>BENEFITS</h1> 
                        
                    }

                    {lang?

                       <div   className="vaga-beneficios"  dangerouslySetInnerHTML={{__html: vagas.acf.beneficios}}></div> :
                       <div   className="vaga-beneficios"  dangerouslySetInnerHTML={{__html: vagas.acf.beneficios_en}}></div>

                    }

                    {lang?
                        <a href={vagas.acf.candidatese} className="button-candidate-se">CANDIDATE-SE</a> :
                        <a href={vagas.acf.candidatese_en} className="button-candidate-se">APPLY</a>

                    }
                  
                       </div>

                    <button className="button-close-vaga" onClick={this.removeActiveClass}> <i></i> {lang? 'VOLTAR': 'BACK'}</button>
                    </div>

                  ))}
                </div>
              ) : null }
            
            </div>
            </div>
        );
    }
}

export default Vagas;