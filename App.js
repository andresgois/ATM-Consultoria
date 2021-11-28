import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CenaClientes from "./components/Clientes/CenaClientes";
import CenaPrincipal from "./components/Principal/CenaPrincipal";
import CenaContato from "./components/Contato/CenaContato";
import CenaEmpresa from "./components/Empresa/CenaEmpresa";
import CenaServicos from "./components/Servicos/CenaServicos";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render(){
    return(
      <SafeAreaProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="CenaPrincipal"> 
          <Stack.Screen name="CenaPrincipal" component={ CenaPrincipal} 
            options={{ 
              title: 'ATM Consultoria',
              headerStyle: {
                backgroundColor: '#ccc',
              },
              statusBarHidden: true,
              headerTitleAlign: "center",
            }} 
          />
          <Stack.Screen name="CenaClientes" component={ CenaClientes} 
          options={{ 
            title: 'ATM Consultoria',
            headerStyle: {
              backgroundColor: '#b9c941',
            },
            statusBar: {
              backgroundColor: '#b9c941'
            },
            statusBarHidden: false,
            headerTitleAlign: "center",
          }} 
          />
          <Stack.Screen name="CenaContato" component={ CenaContato } 
          options={{ 
            title: 'ATM Consultoria',
            headerStyle: {
              backgroundColor: '#61bd8c',
            },
            statusBarHidden: true,
            headerTitleAlign: "center",
          }} 
          />
          <Stack.Screen name="CenaEmpresa" component={ CenaEmpresa } 
          options={{ 
            title: 'ATM Consultoria',
            headerStyle: {
              backgroundColor: '#ec7148',
            },
            statusBarHidden: true,
            headerTitleAlign: "center",
          }} 
          />
          <Stack.Screen name="CenaServicos" component={ CenaServicos } 
          options={{ 
            title: 'ATM Consultoria',
            headerStyle: {
              backgroundColor: '#19d1c8',
            },
            statusBarHidden: true,
            headerTitleAlign: "center",
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

