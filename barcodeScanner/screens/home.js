import React, { useState, useEffect } from 'react';
import {ImageBackground, Grid, View, StyleSheet } from 'react-native';
import { Stack, Text,Content, Button,Center, Heading, ScrollView, VStack, Divider, NativeBaseProvider, Container } from "native-base";

export default function Home({navigation}) {
 
   const image="../home.jpg";
  return (
  
   
  
  
  <ImageBackground source={require(image)} resizeMode="cover" style={styles.image}>
    


<Stack direction="row" mb="2.5" mt="1.5" space={3}>

            <Button  size="lg" onPress={()=>navigation.navigate("Read")}><Text bold color="white" fontSize="md" style={{alignItems:"center"}}>    Leer </Text><Text bold color="white" fontSize="md" style={{alignItems:"center"}}>Productos</Text></Button>
        
           <Button title="New Product"  size="lg" variant="subtle" colorScheme="secondary"  onPress={()=>navigation.navigate("New Product")}><Text bold  fontSize="md">Agregar Producto</Text></Button>
          


      
           <Button title="New Price"  size="lg"  colorScheme="secondary"  onPress={()=>navigation.navigate("New Price")}><Text bold  fontSize="md">Modificar</Text><Text bold  fontSize="md" style={{alignItems:"center"}}>   precio</Text></Button>
         
        
         

</Stack>
<View style={{resizeMode:"cover",justifyContent:"center", height:"100"}}></View>

</ImageBackground>

   
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    resizeMode: "cover",
    
  },

  Button:{
    marginTop:10 ,
  },
 
  image:{
    flex: 1,
    resizeMode: "cover",
  

},


contentStyle:{
  flex:1,
      //  backgroundColor:'green',


}
});

