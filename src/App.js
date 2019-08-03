import React from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Application/Home";
import WordList from "./Word/WordList";
import WordCreate from "./Word/WordCreate";


function App() {
  return (
    <div>
     <HashRouter>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/create">Crear Palabra</NavLink></li>
            <li><NavLink to="/Palabras">Palabras</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={WordCreate}/>
            <Route path="/Palabras" component={WordList}/>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
