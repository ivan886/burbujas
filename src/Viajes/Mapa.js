import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Mapa extends React.Component {
  constructor(props) {
    super(props);
    
    /*this.props.viajes.map(viaje => 
                 console.log(viaje.imei)
                   )
    */
    //alert(this.props.viajes);
    
    
    
    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }
  
  
  

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <div>
      <h1>{this.props.contenido}</h1>
        <Map
          google={this.props.google}
          zoom={8}
          
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyC0ohvgkNO-FoDiwSVnhg0_VYZGDxF6IGc")
})(Mapa);