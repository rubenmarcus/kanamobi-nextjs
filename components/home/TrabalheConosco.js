import React, { Component } from "react";

const TrabalheConosco = props => (
            <div className="trabalhe-conosco">
            <div className="contact-buttons">  {props.children} </div>  
         <form>
         <h1>TRABALHE CONOSCO</h1>
         <p>Venha fazer parte
         do nosso time
         E seja um kanamober.</p>
         <input type="text" placeholder="NOME" />
         <input type="tel" placeholder="TELEFONE" />
         <input type="email" placeholder="E-MAIL" />
         <input type="file" placeholder="ANEXAR CURRÍCULO" />
         <textarea defaultValue="MENSAGEM"></textarea>
         <button type="submit">ENVIAR  <i></i></button>
         </form>
         </div>
         );
 
  export default TrabalheConosco;