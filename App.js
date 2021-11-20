import React, {Component} from "react";
import CenaClientes from "./components/Clientes/CenaClientes";
import CenaPrincipal from "./components/Principal/CenaPrincipal";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render(){
    return(
      // <CenaPrincipal />
      //<CenaClientes />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={CenaPrincipal}            
            options={{ title: '' }}
          />
          <Stack.Screen 
            name="Clientes"
            component={CenaClientes}    
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}