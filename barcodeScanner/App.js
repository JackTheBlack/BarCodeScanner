import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/mainStack.js';
import Read from "./screens/read.js";
import Home from "./screens/home.js";
import { NativeBaseProvider } from 'native-base';

export default function App() {


  return (
  
    <NativeBaseProvider>
<MainStack/>
    </NativeBaseProvider>

  
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

