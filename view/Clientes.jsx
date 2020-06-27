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

 
class Clientes extends Component {
    //  state = {  }
    titulo = "Clientes";
    clientes = ["ANA KARENT", 
      "ALBERTO", 
      "ARMANDO"];
  
    //frmReferencia = React.createRef();
    frmNombre = React.createRef();
  
    addCliente = event => {
      console.log("Agregar cliente");
      event.preventDefault();
      console.log("Console mensaje");    
      console.log(this.frmIdCliente.value);
      console.log(this.frmNombre.value);
      this.clientes.push(this.frmNombre.value);
    };
  
      render() { 
          return ( 
              <div className="App-Clientes">
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
                  <form autoComplete="off" onSubmit={this.addCliente}>    
                      <TextField
                          label="IdCliente"
                          type="text"
                          margin="normal"
                          variant="outlined"
                          inputRef={e => (this.frmIdCliente = e)}
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
                      onClick={this.addCliente}
                      >
                      <AddIcon />
                      </Fab>
                  </form>
  
                  <List
                      component="nav"
                      subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                      >
                      {this.clientes.map((cliente) => (
                          <ListItem button key={cliente}>
                          <ListItemIcon>
                              <AppleIcon />
                          </ListItemIcon>
                          <ListItemText inset primary={cliente} />
                          </ListItem>
                      ))}
                  </List>
              </div>
           );
      }
  }
   
  export default Clientes;