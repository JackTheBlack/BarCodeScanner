import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Button} from "native-base"


export default function Home({navigation}) {
 
  return (
    <View style={styles.container}>


     <Button  size="md" onPress={()=>navigation.navigate("Read")}>Leer Producto</Button>
     <Button title="New Product"  size="md" variant="subtle" colorScheme="secondary"  onPress={()=>navigation.navigate("New Product")}>Agregar Producto</Button>
     <Button title="New Price"  size="md"  colorScheme="secondary"  onPress={()=>navigation.navigate("New Price")}>Modificar Precio</Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Button:{
    marginTop:10 ,
  },

});

