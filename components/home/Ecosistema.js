import React, { Component } from "react";
import {ReactHeight} from 'react-height';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class EcoSistema extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks:0,
            backg:0,
            backgIn:0,
            height: 0,
            newHeight:0,
            EcoInterna: false
          };
          this.IncrementItem = this.IncrementItem.bind(this);
          this.hideEco = this.hideEco.bind(this);
          this.DecrementItem = this.DecrementItem.bind(this);
          this.myRef=null  
          
    }   
    
    showEco(id) {
        const currentmessage = this.props.Ecoin.filter(stories => stories.id === id);
        this.setState({ EcoInterna: currentmessage });
        this.props.bodynoScroll('noScroll');  
        this.scrollToMyRef();

      }

   
      hideEco() {
        this.setState({
            EcoInterna: false
        })
        
        this.props.bodynoScroll('');  
      }

      scrollToMyRef = () => {   // run this method to execute scrolling. 
        window.scrollTo({
            top:this.myRef.offsetTop, 
            behavior: "smooth"   // Optional, adds animation
        })
    }


    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        this.setState({ backg: this.state.backg + 90 });
        this.setState({ backgIn: this.state.backgIn + 180 });
        this.btn.setAttribute("disabled", "disabled");
        setTimeout(() => { this.btn.removeAttribute("disabled"); }, 1000);
    
        if(this.state.clicks > 6){
            
            this.setState({ clicks: 0 });
        } 
        
      }

      GoDown = () =>{
          this.btnup.removeAttribute("disabled");
     //   this.setState({height: this.state.height + 30})
       // console.log(this.state.height , 'Height Down');
        if (  this.state.height < 0 ) {
            this.setState({height: this.state.height + 80})
          } else {
            this.btndown.setAttribute("disabled", "disabled");

          }
      }
      GoUp = () =>{
       
          const HeightLimit = - this.state.newHeight + 120;
         // console.log('NH 1',HeightLimit  , HeightLimit > this.state.height);
           // console.log(this.state.height);
            this.btndown.removeAttribute("disabled");
          if (HeightLimit < this.state.height  ) {
            this.setState({height: this.state.height - 80})
            this.btndown.removeAttribute("disabled", "");
          } else {
            this.btnup.setAttribute("disabled", "disabled");

          }
      }

     DecrementItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
        
        this.setState({ backgIn: this.state.backgIn  - 180 });
        this.setState({ backg: this.state.backg - 90 });
        this.btnprev.setAttribute("disabled", "disabled");
        setTimeout(() => { this.btnprev.removeAttribute("disabled"); }, 1000);

        if(this.state.clicks === 0){
            
            this.setState({ clicks: 7 });
        } 
        
      }

    render() {
       // console.log('Height' , this.myDiv.current.offsetHeight);
       const lang = this.props.lang;

       const labellateral = this.props.info.map((es, index) => {
          const labelEN = es.acf.label_lateral_en;
          const labelPT = es.acf.label_lateral;
        return(
          <div className="what-we-do" key={index}>  {lang? labelPT : labelEN} </div>
        )


        });

        const { EcoInterna } = this.state
        const ecos = this.props.info.map((es, index) => {
            const position1 = es.acf.position_1;
            const position2 = es.acf.position_2;
            const position3 = es.acf.position_3;
            const position4 = es.acf.position_4;

            const position1_en = es.acf.position_1_en;
            const position2_en = es.acf.position_2_en;
            const position3_en = es.acf.position_3_en;
            const position4_en = es.acf.position_4_en;

            const interna1 = es.acf.internas[0];
            const interna2 = es.acf.internas[1];
            const interna3 = es.acf.internas[2];
            const interna4 = es.acf.internas[3];
            const interna5 = es.acf.internas[4];
            const interna6 = es.acf.internas[5];
            const interna7 = es.acf.internas[6];
            const interna8 = es.acf.internas[7];

            const internaen1 = es.acf.internasen[0];
            const internaen2 = es.acf.internasen[1];
            const internaen3 = es.acf.internasen[2];
            const internaen4 = es.acf.internasen[3];
            const internaen5 = es.acf.internasen[4];
            const internaen6 = es.acf.internasen[5];
            const internaen7 = es.acf.internasen[6];
            const internaen8 = es.acf.internasen[7];

            const contentIn1 = <li className="eco-in-1 eco-ux" onClick={()=> this.showEco(229)}> <img src={interna1.imagem.url} /> <span>{interna1.nome} </span></li>;
            const contentIn2 = <li className="eco-in-2 eco-prototipos" onClick={()=> this.showEco(233)}> <img src={interna2.imagem.url} /> <span>{interna2.nome} </span></li>;
            const contentIn3 = <li className="eco-in-3 eco-dev-mobile"  onClick={()=> this.showEco(231)}> <img src={interna3.imagem.url} /> {interna3.nome}</li>;
            const contentIn4 =   <li className="eco-in-4 eco-pwa" onClick={()=> this.showEco(244)}><img src={interna4.imagem.url} /> {interna4.nome}</li>  
            const contentIn5 =   <li className="eco-in-5 eco-web-api" onClick={()=> this.showEco(242)}><img src={interna5.imagem.url} /> {interna5.nome}</li>    
            const contentIn6 =   <li className="eco-in-6 eco-gestao"  onClick={()=> this.showEco(234)}><img src={interna6.imagem.url} /> {interna6.nome}</li>   
            const contentIn7 =   <li className="eco-in-7 eco-qa" onClick={()=> this.showEco(239)}><img src={interna7.imagem.url} /> {interna7.nome}</li>    
            const contentIn8 =   <li className="eco-in-8 eco-cloud" onClick={()=> this.showEco(246)}><img src={interna8.imagem.url} /> {interna8.nome}</li>    
             

            const contentInEn1 = <li className="eco-in-1 eco-ux" onClick={()=> this.showEco(229)}> <img src={internaen1.imagem.url} /> <span>{internaen1.nome} </span></li>;
            const contentInEn2 = <li className="eco-in-2 eco-prototipos" onClick={()=> this.showEco(233)}> <img src={internaen2.imagem.url} /> <span>{internaen2.nome} </span></li>;
            const contentInEn3 = <li className="eco-in-3 eco-dev-mobile"  onClick={()=> this.showEco(231)}> <img src={internaen3.imagem.url} /> {internaen3.nome}</li>;
            const contentInEn4 =   <li className="eco-in-4 eco-pwa" onClick={()=> this.showEco(244)}><img src={internaen4.imagem.url} /> {internaen4.nome}</li>  
            const contentInEn5 =   <li className="eco-in-5 eco-web-api" onClick={()=> this.showEco(242)}><img src={internaen5.imagem.url} /> {internaen5.nome}</li>    
            const  contentInEn6 =   <li className="eco-in-6 eco-gestao"  onClick={()=> this.showEco(234)}><img src={internaen6.imagem.url} /> {internaen6.nome}</li>   
            const  contentInEn7 =   <li className="eco-in-7 eco-qa" onClick={()=> this.showEco(239)}><img src={internaen7.imagem.url} /> {internaen7.nome}</li>    
            const contentInEn8 =   <li className="eco-in-8 eco-cloud" onClick={()=> this.showEco(246)}><img src={internaen8.imagem.url} /> {internaen8.nome}</li> 



           // console.log(this.state.height);

              const  ecoList = 'ecolist-' + parseInt(this.state.clicks);
              const  outList = 'outlist-' + parseInt(this.state.clicks);
              const  backg = 'backg ' + 'backg-' + parseInt(this.state.backg);
            return (
                   <div className="ecos"  key={index}>
                   {lang ?    <div className="ecos-content" dangerouslySetInnerHTML={{__html: es.content.rendered}}></div> :
                   <div className="ecos-content" dangerouslySetInnerHTML={{__html: es.acf.english_content}}></div>
                  }
                
                   <div className="outside">
                   <div className="backg" style={{transform: `rotate(${this.state.backg}deg)`}}></div>

                   {lang? 
                          <ul className={outList}>
                            <li>{position1}</li>
                            <li>{position2}</li>
                            <li>{position3}</li>
                            <li>{position4}</li>
                          </ul>
                      :
                        <ul className={outList}>
                        <li>{position1_en}</li>
                        <li>{position2_en}</li>
                        <li>{position3_en}</li>
                        <li>{position4_en}</li>
                        </ul>

                   }
                    
                    <div className="inside">
                 
                    
                      {lang? 
                        <span className="label-in">   {es.acf.label_interno}
                        </span>
                        :
                        <span className="label-in">   {es.acf.label_interno_en}
                        </span>

                      }
                            <div className="label-interno"  style={{transform: `rotate(${this.state.backgIn}deg)`}}>
                     
                            </div>
                            <div>
                              {lang ? 
                                <ul className={ecoList}>

                     
                            
                          
                       
                                {contentIn1}
                                {contentIn2}
                                {contentIn3}
                                {contentIn4}
                                {contentIn5}
                                {contentIn6}
                                {contentIn7}
                                {contentIn8}
                           </ul>
                               :      <ul className={ecoList}>
                               {contentInEn1}
                               {contentInEn2}
                               {contentInEn3}
                               {contentInEn4}
                               {contentInEn5}
                               {contentInEn6}
                               {contentInEn7}
                               {contentInEn8}
                          </ul>

                             }
                            
                            </div>
                      
                     
      
                    </div>
                   </div>
                   <button  className="btnEcoNext" ref={btn => { this.btn = btn; }}  onClick={this.IncrementItem}> NEXT </button>
                    <button  className="btnEcoPrev" ref={btnprev => { this.btnprev = btnprev; }}   onClick={this.DecrementItem}> Prev </button>
                   </div>
            );
        });


        return (
            <section className="home__third" id="ecossistema"  ref={ (ref) => this.myRef=ref }>
                <div className="home__third-bg"></div>
              {lang ? 
                <h1>ecos<br/> sistema <br/>digital</h1>
                : 
                <h1>digital<br/> ecos <br/>system</h1>
            }
              <div className="grid">
                <div className="grid-line grid-line-1">
                </div>
                <div className=" grid-line grid-line-2">
                </div>
                <div className=" grid-line grid-line-2-above">
                </div>
                <div className="grid-line grid-line-4">
                </div>
                <div className="grid-line grid-line-4-above">
                </div>
                <div className="grid-line grid-line-5">
                </div>
                 </div>
              {ecos}

              {EcoInterna ? (
                <div className="ecoIn-in">
                { EcoInterna.map((stories, index)  => (
                    <div  key={index} >
                    <div className="ecoIn-close" onClick={this.hideEco}></div>

                    <div className="ecoIn-content">
                    <div className="ecoIn-title">
                    <div className="econIn-logo">
                    <img src={stories.acf.imagem.url} />
                    </div>
                    <div className="ecoIn-project">
                        <h1>{lang? stories.title.rendered : stories.acf.entitle}</h1>
                        </div>
                        </div>
                        <ul className="ecoIn-desc" >
                        <ReactHeight onHeightReady={value => this.setState({newHeight: value})}>
                      {lang? 
                        <li  style={{position:'relative',top: `${this.state.height}px`}} dangerouslySetInnerHTML={{__html: stories.content.rendered}}></li>:
                        <li  style={{position:'relative',top: `${this.state.height}px`}} dangerouslySetInnerHTML={{__html: stories.acf.english_content}}></li> } 
                                      
</ReactHeight>

</ul>
{this.state.height === 0?
<button className="goDown" disabled="disabled"  ref={btndown => { this.btndown = btndown; }}  onClick={this.GoDown}>Down</button>
  :
  <button className="goDown"  ref={btndown => { this.btndown = btndown; }}  onClick={this.GoDown}>Down</button>

}

<button className="goUp"  ref={btnup => { this.btnup = btnup; }}  onClick={this.GoUp}>Up</button>
                 </div>
                 </div>
                  ))}
                </div>
              ) : null }
                {labellateral}
              <div className="number">03</div>
            </section>
        );
    }
}

export default EcoSistema;
