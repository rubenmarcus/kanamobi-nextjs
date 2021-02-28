import React, { Component } from "react";
import GoogleMapReact from 'google-map-react'

const MapDetails = ({info}) =><div className="map-in-box"> <div className="box-map"> <img src="static/images/pin.png" /> <p>{info.address} </p><p>{info.contato} </p><p>{info.tel} </p>
</div><i></i></div>;


class Escritorio extends Component {
    constructor() {
        super();
        this.addActiveClass= this.addActiveClass.bind(this);
        this.removeActiveClass= this.removeActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toogleClass() {
      this.setState({active: !this.state.active});
  }

    addActiveClass() {
      this.setState({
       active: true
      })
    }
    removeActiveClass() {
      this.setState({
       active: false
      })
    }

    static defaultProps = {
        center: { lat: -23.5214273, lng: -46.66548549999999 },
        zoom: 15
      }



  render() {
    const lang = this.props.lang;
    const EscritorioBrasilDesk = this.props.escritorio.map((escritorio, index) => {

      const lat = parseFloat(escritorio.acf.Mapa.lat);
      const long = parseFloat(escritorio.acf.Mapa.lng);
      const center = {lat: lat, lng:long };
      const classMapDesk = 'map-in ' + '' + 'is-desktop ' + '' + 'map-'+ index;
      let info =  {tel: escritorio.acf.telefone, contato: escritorio.acf.contato, address: escritorio.acf.endereco};
      const EscritorioName = escritorio.title.rendered;

      return (
    
         <div className={classMapDesk} key={index}>
         
        {lang?  <div className="escritorio-title"  dangerouslySetInnerHTML={{__html: escritorio.title.rendered}}></div> :
      
        <div className="escritorio-title"  dangerouslySetInnerHTML={{__html: escritorio.acf.entitle}}></div>
      }
         <GoogleMapReact
         bootstrapURLKeys={{ key: 'AIzaSyBT8qTxDnFnQzCLzsFjgpo_2eHm-ShNOVs' }}
           center={ center }
           zoom={ this.props.zoom }>
           <MapDetails  lat={center.lat} lng={center.lng}
            info={info}
         />
         </GoogleMapReact>
         </div>
            
      );
  });

  const EscritorioBrasilMobile= this.props.escritorio.map((escritorio, index) => {

    const lat = parseFloat(escritorio.acf.Mapa.lat);
    const long = parseFloat(escritorio.acf.Mapa.lng);
    const center = {lat: lat, lng:long };
    const classMapMobile = 'map-in ' + '' + 'map-'+ index;
    let info =  {tel: escritorio.acf.telefone, contato: escritorio.acf.contato, address: escritorio.acf.endereco};
    const EscritorioName = escritorio.title.rendered;
    const escritorioIdx = 'escritorio-title ' + 'escritorio-'+ index;

    return (
      <div className="map-container is-mobile" key={index}>
      <div className={escritorioIdx}  dangerouslySetInnerHTML={{__html: escritorio.title.rendered}}></div>

       <div className={classMapMobile} key={index}>
       
       <GoogleMapReact
       bootstrapURLKeys={{ key: 'AIzaSyBT8qTxDnFnQzCLzsFjgpo_2eHm-ShNOVs' }}
         center={ center }
         zoom={ this.props.zoom }>
         <MapDetails  lat={center.lat} lng={center.lng}
          info={info}
       />
       </GoogleMapReact>
       </div>
          </div>
    );
});

    return (
      <div className="google-map">
      <div className="map">
      <div className={this.state.active ? 'map-active': null}>
          {EscritorioBrasilDesk}
          {EscritorioBrasilMobile}
          </div>
        <div className="map-buttons">
        <button className="map-next" onClick={this.toogleClass.bind(this)}></button>
        <div  className={this.state.active ? 'map-number-active': null}>
        <button className="map-first" onClick={this.removeActiveClass}>  01</button>
        <button className="map-sec" onClick={this.addActiveClass}>02</button>
        </div>
        </div>
        </div>
      </div>
    );
    }
}

export default Escritorio;