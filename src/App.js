import React from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Application/Home";
import ViajeList from "./Viajes/ViajeList";
import ViajeCreate from "./Viajes/ViajeCreate";


function App() {
  return (
    <div>
     <HashRouter>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/create">Consultar</NavLink></li>
            <li><NavLink to="/viajes">Viajes</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={ViajeCreate}/>
            <Route path="/viajes" component={ViajeList}/>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
