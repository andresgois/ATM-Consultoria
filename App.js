import React, {Component} from "react";
import CenaClientes from "./components/Clientes/CenaClientes";
import CenaPrincipal from "./components/Principal/CenaPrincipal";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CenaPrincipal" component={ CenaPrincipal} 
            options={{ 
              title: 'ATM Consultoria',
              headerStyle: {
                backgroundColor: '#ccc',
              },
              statusBarHidden: false,
              headerTitleAlign: "center",
            }} 
          />
          <Stack.Screen name="CenaClientes" component={ CenaClientes} 
           options={{ 
            title: 'ATM Consultoria',
            headerStyle: {
              backgroundColor: '#b9c941',
            },
            statusBarHidden: false,
            headerTitleAlign: "center",
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}