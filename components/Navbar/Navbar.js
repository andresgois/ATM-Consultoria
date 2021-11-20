
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles.module';

class Navbar extends Component {
  constructor(props){
    super(props)
  }

 render(){
   return(
     <View style={[styles.container, {backgroundColor: this.props.cor}]}>
       <Text style={styles.texto}>
         ATM Consultoria
       </Text>
     </View>
   );
  }
 }

export default Navbar;