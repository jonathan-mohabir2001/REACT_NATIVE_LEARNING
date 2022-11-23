/*
About page to display information about the application

React Native components used:
- View
- Text
- StyleSheet
-Animations
*/

import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Assignment 02, created by Jonathan M. </Text>
            <Text style={styles.text}>An app to display a cryptocurrency price tracker.</Text>
            <Text style={styles.text}>Check package.json for required components to work with. </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }});

export default About;
// export default function About() {