import React, {Component} from "react";
import CenaClientes from "./components/Clientes/CenaClientes";
import CenaPrincipal from "./components/Principal/CenaPrincipal";



export default class App extends Component {
  render(){
    return(
      // <CenaPrincipal />
      <CenaClientes />
    );
  }
}