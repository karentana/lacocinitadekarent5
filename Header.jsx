import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../arriba.jpg';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-header">
                <img width = "800" height = "200" src={logo} alt = "logo"/> <h1>
                    { this.props.name }
                               </h1>
            </div>
         );
    }
}
 
export default Header;