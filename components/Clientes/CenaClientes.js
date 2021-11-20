
import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import Navbar from "../Navbar/Navbar";
import { styles } from './Styles.module';

const detalheCliente = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');
const volta = require('../../imgs/btn_voltar.png');

class CenaClientes extends Component {

 render(){
   return(
    <View>
      <StatusBar 
        hidden={false}
        backgroundColor='#b9c941'
      />
      <Navbar cor="#b9c941" />

      <View style={styles.cliente}>
        <Image style={styles.detalheCliente} source={detalheCliente} />
        <Text style={styles.cliTexto}>Nossos Clientes</Text>
      </View>

      <View style={styles.grupoImg}>
        <View style={styles.card}>
          <Image source={cliente1} />
          <Text style={styles.texto}>Sistema de Clientes</Text>
        </View>
        <View style={styles.card}>
          <Image source={cliente2} />
          <Text style={styles.texto}>Sistema de Redirecionamento</Text>
        </View>
      </View>

    </View>
   );
  }
 }

export default CenaClientes;