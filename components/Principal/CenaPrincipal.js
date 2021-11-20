
import React, { Component } from 'react';
import { Image, StatusBar, View } from 'react-native';
import Navbar from "../Navbar/Navbar";
import { styles } from './Styles.module';

const logo        = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServico = require('../../imgs/menu_servico.png');

class CenaPrincipal extends Component {

 render(){
   return(
    <View>
      <StatusBar 
        hidden={false}
        backgroundColor='#ccc'
      />
      <Navbar cor="#ccc" />

      <Image style={styles.logo} source={logo} />

      <View style={styles.grupoImg}>
        <Image style={styles.menu} source={menuCliente} />
        <Image style={styles.menu} source={menuContato} />
        <Image style={styles.menu} source={menuEmpresa} />
        <Image style={styles.menu} source={menuServico} />
      </View>

    </View>
   );
  }
 }

export default CenaPrincipal;