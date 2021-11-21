import React, { Component } from 'react';
import { Alert, Image, StatusBar, TouchableOpacity, View, Text } from 'react-native';
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
      <StatusBar hidden={false} backgroundColor='#ccc' />

      <Image style={styles.logo} source={logo} />

      <View style={styles.grupoImg}>
        <TouchableOpacity 
          activeOpacity = { .5 }
          onPress={ () => this.props.navigation.navigate('CenaClientes')}
        >
          <View>
            <Image style={styles.menu} source={menuCliente} />
          </View>
        </TouchableOpacity>
        <Image style={styles.menu} source={menuContato} />
        <Image style={styles.menu} source={menuEmpresa} />
        <Image style={styles.menu} source={menuServico} />
      </View>

    </View>
   );
  }
 }

export default CenaPrincipal;