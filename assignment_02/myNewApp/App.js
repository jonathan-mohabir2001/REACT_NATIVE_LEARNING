/*
Assignment 02, created by Jonathan M. 

An app to display a cryptocurrency price tracker.
Check package.json for required components to work with. 
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//About and prices page to be imported from components directory
import About from './components/About';
import Prices from './components/Prices';
// Components imported from the components directory. 


import 'react-native-gesture-handler';
import * as React from 'react';

// navigation components imported below
import { NavigationContainer } from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';




const Stack = createStackNavigator();
// instance of the navigation container created.


function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Prices" component={Prices} />

      </Stack.Navigator>


    </NavigationContainer>

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



// Create functional components and then export them at the bottom of the file
export default App;