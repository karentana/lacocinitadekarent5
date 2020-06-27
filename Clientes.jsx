import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import logo from '../arriba.jpg';

import Header from './Header';
import ClientesView from '../view/Clientes';
import Footer from './Footer';

class Clientes extends Component {
    state = {  }
    ClientesArray = ["ANA KARENT", 
    "ALBERTO", 
    "ARMANO"];
    render() { 
        return ( 
            <div>
            <Header name="CLIENTES" />
                <ClientesView data={ this.ClientesArray} />
                <Footer />
            </div>
         );
    }
}
 
export default Clientes;