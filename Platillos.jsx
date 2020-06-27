import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import logo from '../arriba.jpg';

import Header from './Header';
import PlatillosView from '../view/Platillos';
import Footer from './Footer';

class Platillos extends Component {
    state = {  }
    PlatillosArray = ["ANA KARENT", 
    "ALBERTO", 
    "ARMANO"];
    render() { 
        return ( 
            <div>
            <Header name="CLIENTES" />
                <PlatillosView data={ this.PlatillosArray} />
                <Footer />
            </div>
         );
    }
}
 
export default Platillos;