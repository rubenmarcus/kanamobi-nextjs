import React, { Component } from "react";


const TalkWithUs = props => (
            <div className="fale-conosco">
          <div className="contact-buttons">  {props.children} </div>  
         <form>
         <h1>CONTACT US</h1>
         <p>Let's have a coffee.
           <br /> and discover together
         how can we
         help your project.</p>
         <input type="text" placeholder="NAME" />
         <input type="tel" placeholder="PHONE" />
         <input type="email" placeholder="E-MAIL" />
         <textarea defaultValue="MESSAGE"></textarea>
         <button type="submit">SUBMIT <i></i></button>
         </form>
         </div>
        );
 

export default TalkWithUs;