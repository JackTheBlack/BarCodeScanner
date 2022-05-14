import React, { useState, useEffect } from 'react';
import {Text, TextInput, View, StyleSheet, Modal, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { Input, FormControl, WarningOutlineIcon, Box, Center, NativeBaseProvider } from "native-base";
import FormNewPrice from "../components/formNewPrice"

export default function NewPrice({navigation}){
  const [id,setId]=useState();
   const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [barCode,setBarCode]=useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showModal,setShowModal]=useState(false);  
  const [code,setCode]=useState(null);
  const [found,setFound]=useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

const handleAddProduct=()=>{

}


const handleNameChange=text=>{
  setName(text);
 
}

const handlePriceChange=text=>{
  setPrice(text);
 
}

  


  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setCode(data);
    
    
    let article="";
    try {
      const response = await axios({
        url: `https://615610d8e039a0001725a8f2.mockapi.io/users?codigo=${data}`,
        method: "GET",
      });
       
      let res=response.data[0];
      console.log(data);
      if (response.data.length<1){
        alert("no se encontro el producto solicitado");
      }else{
        setId(res.id);
        setName(res.nombre);
       
        setPrice(res.precio);
        setShowModal(true);
        console.log(name," ",price," ",id)
      }
       
     
        
    } catch (e) {
      console.log(e)
     
    }
 
  };

  if (hasPermission === null) {
  
(async()=>{
  const {status}= await BarCodeScanner.requestPermissionsAsync();
  setHasPermission(true);
  
})()
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
       <Modal  visible={showModal}  animation="fade"   >

            <FormNewPrice  id={id} codigo={code} nombre={name} precio={price} />

            <View>
              
            <Button title="cerar" onPress={()=>setShowModal(false)} />
            </View>
         
        </Modal> 

        <View style={styles.scannerBox}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{width:700, height:700} }
      />
      </View>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <Button title="Home" onPress={()=>navigation.navigate("Home")}/>
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
  scannerBox:{
    
     alignItems: 'center',
    justifyContent: 'center',
    height:400,
    width:400,
    overflow:'hidden',
    borderRadius:30,
    backgroundColor:'tomato'
    
  

  }
});