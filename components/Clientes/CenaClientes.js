import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles.module';

const detalheCliente = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');

class CenaClientes extends Component {

 render(){
   return(
    <SafeAreaView style={styles.container} >

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

    </SafeAreaView>
   );
  }
 }

export default CenaClientes;