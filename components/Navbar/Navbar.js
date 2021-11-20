
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles.module';

class Navbar extends Component {

 render(){
   return(
     <View style={styles.container}>
       <Text style={styles.texto}>
         ATM Consultoria
       </Text>
     </View>
   );
  }
 }

export default Navbar;