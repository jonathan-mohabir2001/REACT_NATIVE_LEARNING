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


import {NavigationContainer} from '@react-navigation/native';
// navigation container to be used to navigate between pages
import {createStackNavigator} from '@react-navigation/stack';
// Stack navigator needed to navigate between pages

const Stack = createStackNavigator();
// an instance of the stack navigator is created to allow navigation between pages


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