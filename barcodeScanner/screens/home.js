import React, { useState, useEffect } from 'react';
import {Box,StyleSheet } from 'react-native';
import { Text, Button, ScrollView, Heading, Stack , VStack,Center} from "native-base"


export default function Home({navigation}) {
 
  return (
    <ScrollView >
      <VStack space="2.5" mt="4" px="8">
        <Heading size="md">Menu</Heading>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
        <Button  size="lg" length="20" rounded="sm" onPress={()=>navigation.navigate("Read")}><Text bold color="white" fontSize="lg" >    Leer{"\n"}producto</Text></Button>
        <Button title="New Product"  size="lg" variant="subtle" colorScheme="secondary"  onPress={()=>navigation.navigate("New Product")}><Text bold color="white" fontSize="lg" >Agregar {"\n"}Producto</Text></Button>
         <Button title="New Price"  size="lg"  colorScheme="secondary"  onPress={()=>navigation.navigate("New Price")}><Text bold color="white" fontSize="lg" >Modificar{"\n"}   Precio</Text></Button>
        </Stack>
      </VStack>
    
   
   
    
    
     
    </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

});

