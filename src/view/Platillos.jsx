import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AppleIcon from '@material-ui/icons/Apple';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {
    Button,
    Container,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

 
class Platillos extends Component {
    //  state = {  }
    titulo = "Platillos";
    platillos = ["ENSALADA DE POLLO", 
      "ENSALADA DE ATUN", 
      "SOPA DE MARISCOS"];
  
    //frmReferencia = React.createRef();
    frmNombre = React.createRef();
  
    addCliente = event => {
      console.log("Agregar platillo");
      event.preventDefault();
      console.log("Console mensaje");    
      console.log(this.frmcodigo.value);
      console.log(this.frmNombre.value);
      this.platillos.push(this.frmNombre.value);
    };
  
      render() { 
          return ( 
              <div className="App-Platillos">
                  <Link to="/">
                      <Button
                          variant="contained"
                          color="default"
                          size="small"
                          startIcon={< LocalDiningIcon/>}
                      >
                      Regresar
                      </Button>
                  </Link>
                  <form autoComplete="off" onSubmit={this.addPlatillo}>    
                      <TextField
                          label="Codigo"
                          type="text"
                          margin="normal"
                          variant="outlined"
                          inputRef={e => (this.frmcodigo = e)}
                      />
                      &nbsp;&nbsp;
                      <TextField
                          label="Nombre"
                          type="text"
                          margin="normal"
                          variant="outlined"
                          inputRef={e => (this.frmNombre = e)}
                      />
                      <Fab
                      color="primary"
                      size="medium"
                      //className="dish-form-icon"
                      onClick={this.addPlatillo}
                      >
                      <AddIcon />
                      </Fab>
                  </form>
  
                  <List
                      component="nav"
                      subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                      >
                      {this.platillo.map((platillo) => (
                          <ListItem button key={platillo}>
                          <ListItemIcon>
                              <AppleIcon />
                          </ListItemIcon>
                          <ListItemText inset primary={platillo} />
                          </ListItem>
                      ))}
                  </List>
              </div>
           );
      }
  }
   
  export default Platillos;