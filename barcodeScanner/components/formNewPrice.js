import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Modal, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { Input, FormControl, WarningOutlineIcon, Box, Center, NativeBaseProvider } from "native-base";

export default function FormNewPrice({id,codigo,nombre,precio}){

    const [article,setArticle]=useState({id:id,
      codigo:codigo,
      nombre:nombre,precio:precio})
  

    const handleSubmit=()=>{
        // console.log("Codigo:",code," \nNombre:",name, "\nPrecio:",price)
        try {
          axios
            .put(
              "https://615610d8e039a0001725a8f2.mockapi.io/users/" +id,
              article
            )
            .then(() => alert("ID " + cliente.id + " actualizado con exito"));
        } catch (e) {
          console.log("");
        }
     
      
      };
    
     
   
const handlePriceChange=text=>{
  setPrice(text);
 
}


    return(
            <View>
<View>
<Box alignItems="center">
<FormControl  w="75%" maxW="300px">
<FormControl.Label>Codigo</FormControl.Label>
<Input value={article.codigo} />
<FormControl.Label>Nombre</FormControl.Label>
<Input value={article.nombre}  />
<FormControl.Label>Precio</FormControl.Label>
<Input value={article.precio}  onChangeText={handlePriceChange} />

</FormControl>
<Button title="submit" onPress={()=>handleSubmit()} />
</Box>




  
   </View> 
   <View>
     
   </View>



            </View>

    );
}