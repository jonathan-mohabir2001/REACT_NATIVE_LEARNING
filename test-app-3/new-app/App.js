import { json } from 'body-parser';
import { response } from 'express';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const API = 'https://dummy.restapiexample.com/api/v1/employees';

const renderEmployee = ({ item }) => (
  <Employee name={item.employee_name}></Employee>
);

const Employee = (props) => (
  <View>
    <Text> {props.name}</Text>
  </View>
);

export default function App() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {setData(json.data);})
  }, []);



return(
  <View>
    <FlatList data={data} renderItem={renderEmployee} keyExtractor = {(item) => item.id}></FlatList>
  </View>
)
}