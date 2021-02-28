import React, { Component } from "react";

const WorkWithUs = props => (
            <div className="trabalhe-conosco">
            <div className="contact-buttons">  {props.children} </div>  
         <form>
         <h1 className="work-with-us-h1">WORK <br />WITH US</h1>
         <p>Come and join us
          from our team
           And be a kanamober.</p>
         <input type="text" placeholder="NAME" />
         <input type="tel" placeholder="PHONE" />
         <input type="email" placeholder="E-MAIL" />
         <input type="file" placeholder="ATTACH CURRICULUM" />
         <textarea defaultValue="MESSAGE"></textarea>
         <button type="submit">SEND  <i></i></button>
         </form>
         </div>
         );
 
  export default WorkWithUs;