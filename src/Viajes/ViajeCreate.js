import React from 'react';
import axios from 'axios';

class ViajeCreate extends React.Component{
    
    
    constructor(props) {
      super(props);
      this.state = {
        tiempo: '',
        imei: '',
        llave_viaje: '',
        message: '',
      }
    }
    
   handleFormSubmit = e => {
      e.preventDefault();
        
          console.log(this.state);
          
      axios({
         method: 'post',
         url:   'http://18.191.148.84:8000/api/viajes/imei_fecha',
         headers: { 'content-type': 'application/json' },
         data: this.state
      })
      .then(res => {
        const consulta = res.data;
          console.log(consulta);
      })
      .catch(error => this.setState({ error: error.message }));
   };
    
    render(){
        return (
                <form action="#" >
                    <label>tiempo</label>
                    <br/>
                     <input type="text" name="tiempo" placeholder="tiempo"
                        value={this.state.tiempo}
                        onChange={e => this.setState({ tiempo: e.target.value })}
                    />
                    
                    <br/>
                    <label>imei</label>
                    <br/>
                    <input type="text" name="imei" placeholder="imei"
                        value={this.state.tema}
                        onChange={e => this.setState({ imei: e.target.value })}
                    />
                    <br/>
                    <label >llave_viaje</label>
                    <br/>
                    <input type="text" name="llave_viaje" placeholder="llave_viaje"
                        value={this.state.llave_viaje}
                        onChange={e => this.setState({ llave_viaje: e.target.value })}
                    />
                    <br/>
                     <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
              </form>
            );
    }
}


export default ViajeCreate;
