import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

var clientes = ["ANA KARENT", 
"ALBERTO", 
"ARMANDO"];


class Menu extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            clientes: clientes
        }
    }
    state = {
        
    }

    render() { 
        return ( 
            <div>
                <Header name="MENU PRINCIPAL" />
                <Content data={ this.state.data } />
                <Footer />
            </div>
         );
    }
}
 
export default Menu;