import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity, View,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles.module';

const logo        = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServico = require('../../imgs/menu_servico.png');

class CenaPrincipal extends Component {

 render(){
   return(
    <SafeAreaView  style={styles.container}>
      <StatusBar backgroundColor="red" hidden={false} barStyle="default"  />

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

        <TouchableOpacity 
          activeOpacity = { .5 }
          onPress={ () => this.props.navigation.navigate('CenaContato')}
        >
          <View>
            <Image style={styles.menu} source={menuContato} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity = { .5 }
          onPress={ () => this.props.navigation.navigate('CenaEmpresa')}
        >
         <Image style={styles.menu} source={menuEmpresa} />
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity = { .5 }
          onPress={ () => this.props.navigation.navigate('CenaServicos')}
        >
          <Image style={styles.menu} source={menuServico} />
        </TouchableOpacity>
      </View>

    </SafeAreaView >
   );
  }
 }

export default CenaPrincipal;