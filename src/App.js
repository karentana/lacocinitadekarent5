import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Clientes from './component/Clientes';
import Bebidas from './component/Bebidas';
import Content from './component/Content';
import Footer from './component/Footer';
import Platillos from './component/Platillos';
import Header from './component/Header';

import Menu from './component/Menu';
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/platillos" exact component={Platillos} />
          <Route path="/test" exact component={() => <h1>Principal</h1>} />
          <Route path="/mantenimiento" exact component={() => <h1>ESTAMOS EN MANTENIMIENTO</h1>} />
          <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
