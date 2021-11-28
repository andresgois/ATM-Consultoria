import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { styles } from './Styles.module';

const img = require('../../imgs/detalhe_empresa.png');

class CenaEmpresa extends Component {

 render(){
   return(
    <View  style={styles.container}>
      <StatusBar 
        hidden={false}
        backgroundColor='#ec7148'
      />

      <View style={styles.cliente}>
        <Image style={styles.detalheCliente} source={img} />
        <Text style={styles.cliTexto}>A Empresa</Text>
      </View>

      <View style={styles.grupoImg}>
        <View style={styles.card}>
          <Text style={styles.texto}>
            Empresa é uma organização que realiza atividades econômicas com finalidades comerciais, por meio da produção e venda de bens ou serviços. 
          </Text>
        </View>
      </View>

    </View>
   );
  }
 }

export default CenaEmpresa;