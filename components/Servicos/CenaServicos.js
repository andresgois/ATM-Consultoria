import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { styles } from './Styles.module';

const img = require('../../imgs/detalhe_servico.png');

class CenaServicos extends Component {

 render(){
   return(
    <View  style={styles.container}>
      <StatusBar backgroundColor='#19d1c8' />

      <View style={styles.cliente}>
        <Image style={styles.detalheCliente} source={img} />
        <Text style={styles.cliTexto}>A Empresa</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>- Consultoria</Text>
        <Text style={styles.texto}>- Processos</Text>
        <Text style={styles.texto}>- Acompanhamento de projetos</Text>
      </View>

    </View>
   );
  }
 }

export default CenaServicos;