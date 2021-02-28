import React, { Component } from "react";
import 'isomorphic-fetch'
import MaskedInput from 'react-text-mask'

class FaleConosco extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tel: '',
      message: '',
      email: '',
      name: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);

   
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = {
      tel: this.state.tel,
      message: this.state.message,
      email: this.state.email,
      name: this.state.name,

     }
    console.log(data);
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(data)
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : ''
    })
  }

  render () {
    const { tel, name ,message , email } = this.state;

    return(
            <div className="fale-conosco">
            <div className="contact-buttons">  {this.props.children} </div>  
                <form onSubmit={this.handleSubmit}>
                <h1>FALE CONOSCO</h1>
                
              
                {this.state.submitted ?
                  <p>E-MAIL ENVIADO<br/>
                      COM SUCESSO<br/>
                      RETORNAREMOS <br/>
                      EM BREVE</p> :
                  <p>
                  Vamos tomar um café
                  e descobrir juntos
                  como podemos
                  ajudar seu projeto.</p>
                
                
                }
                <input type="text" name="name" id="name"    value={name}
                onChange={this.onChange} onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "NOME"}  required  placeholder="NOME" />

                <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}  name="tel" id="tel" type="tel"  value={tel} onFocus={(e) => e.target.placeholder = ""} 
                 onBlur={(e) => e.target.placeholder = "TELEFONE"}   
                 onChange={this.onChange}   placeholder="TELEFONE" />

                <input type="email" id="email" name="email"   value={email}
                onChange={this.onChange}  onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "EMAIL"}   placeholder="E-MAIL" required />

                <textarea   defaultValue={message}
                onChange={this.onChange}  name="message" id="message" onFocus={(e) => e.target.plaeholder = ""} 
                onBlur={(e) => e.target.placeholder = "MENSAGEM"}  placeholder="MENSAGEM" required ></textarea>
                <button type="submit">ENVIAR <i></i></button>
                </form>
          </div>
    );
  }
}
 

export default FaleConosco;