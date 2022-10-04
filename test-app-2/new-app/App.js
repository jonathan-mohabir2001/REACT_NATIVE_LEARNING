// first project within a react native environment.

/*
Writing React native applications is very much like working 
within a React component based architecture envionment. 

Everything must be stricly imported in order to be of use. 
*/
import { StyleSheet, Text, View } from 'react-native';
// the three components allow for Creating a stylesheet which will allow for css like styling.
// the view component is needed to render things out to the screen.
// the text component is needed in order to work with text.

export default function App() {
  return (
    // everything is written within this view component.

    // the entire view component is assigned the container style
    <View style={styles.container}>
      <Text style={styles.welcome}>
        These are my first lines within React Native!
      </Text>
      <Text style={styles.instructions}>
        Hit ctrl c to stop the server within the terminal.
      </Text>
    </View>
  );
}

// creating styles require an assignemnt of a constant value.

const styles = StyleSheet.create({
  // const styles delcared
  // OBJECT (COMPONENT) stylsheet is then called
  // using Dot notation the create method is then called.
  // styles are then written within opening brackets and curly braces.

  // the styles below are written within a object format.
  // three objects container, welcome, and instructions will be written out to
  // the view or text component within the main exporting code.
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// end of basic program.
