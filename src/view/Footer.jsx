import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FacebookIcon from '@material-ui/icons/Facebook';

import {
    Button,
    Container,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

class Footer extends Component {
  

  

    render() { 
        return ( 
            <div className="App-Footer">
                <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<FacebookIcon />}
                    >
                    Facebook
                    </Button>
                </Link>

              
                

                
            </div>
         );
    }
}
 
export default Footer;