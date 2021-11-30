import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { styles } from './Styles.module';

const detalheContato = require('../../imgs/detalhe_contato.png');

class CenaContato extends Component {

 render(){
   return(
    <View  style={styles.container}>

      <View style={styles.cliente}>
        <Image style={styles.detalheCliente} source={detalheContato} />
        <Text style={styles.cliTexto}>Contatos</Text>
      </View>

      <View style={styles.grupoImg}>

        <View style={styles.card}>
          <Text style={styles.texto}>TEL (11) 1234-56987</Text>
          <Text style={styles.texto}>CEL (11) 1234-56987</Text>
          <Text style={styles.texto}>EMAIL: teste@email.com</Text>
        </View>

      </View>

    </View>
   );
  }
 }

export default CenaContato;