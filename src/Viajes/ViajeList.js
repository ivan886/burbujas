import React from 'react';
import Axios from 'axios';

class ViajeList extends React.Component{
    
  state = {
    viajes: []
  }

  componentDidMount() {
    Axios.get(`http://18.191.148.84:8000/api/viajes`)
      .then(res => {
        const viajes = res.data.data;
        //console.log(persons.data);
        this.setState({ viajes });
      })
  }

  render() {
    return (
         <table>
          <thead>
            <tr>
              <th>Imei</th>
              <th>Llave viaje</th>
              <th>Tiempo</th>
              <th>Medio</th>
              <th>Proposito</th>
              <th>Costo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.viajes.map(viaje => 
                 <tr>
                    <td>{viaje.imei}</td>
                    <td>{viaje.llave_viaje}</td>
                    <td>{viaje.tiempo}</td>
                    <td>{viaje.medio}</td>
                    <td>{viaje.proposito}</td>
                    <td>{viaje.costo}</td>
                   </tr>)
            }
              </tbody>
        </table>
    )
  }
}
export default ViajeList;