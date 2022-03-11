import React, { useState, useEffect } from 'react';
import { NavigationContainer} from "@react-navigation/native";
import Read from "../screens/read.js";
import Home from "../screens/home.js";
import NewProduct from "../screens/newProduct.js";
import NewPrice from "../screens/newPrice.js";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Button } from 'react-native';


export default function MainStack() {

    
    const Stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Read" component={Read} />
      <Stack.Screen name="New Product" component={NewProduct} />
      <Stack.Screen name="New Price" component={NewPrice} />
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

