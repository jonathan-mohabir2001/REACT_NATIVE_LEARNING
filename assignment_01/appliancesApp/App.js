/*
Assignment 01 created by Jonathan M. 

This application will allow users to see a list 
of applicances coming from the random API generator for 
appliances. 

Redux files are created undet the redux folder.
Thunk is the middleware which will allow me to 
return functions rather than just actions. 

*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// provider is the component which will be wrapped around the App

import Home from './components/Home';

export default function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
