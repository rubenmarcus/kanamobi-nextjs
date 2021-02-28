import React, { Component } from "react";




class Social extends Component {
    constructor() {
        super();
      

    }
    
    renderContent = () => {




          
        const SocialOut = this.props.links.map((social, index) => {
            const SocialName = social.title.rendered;
            const SocialClass = 'ico-' + SocialName;
            return (
               <a href={social.acf.link} key={index} className={SocialClass} target="blank" >
               
               </a>
                  
            );
        });



        return  (
        <div className="social-links">
        
                {SocialOut}
        </div>
        );
    }

    render() {
        return this.renderContent();
    }

}

export default Social;
