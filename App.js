import React, {Component} from "react";
import { StatusBar, View } from "react-native"; 
import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  render(){
    return(
      <View>
        <StatusBar />
        <Navbar />
      </View>
    );
  }
}