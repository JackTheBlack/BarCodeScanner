import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Modal, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { Input, FormControl, WarningOutlineIcon, Box, Center, NativeBaseProvider } from "native-base";



export default function NewProduct({navigation}) {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
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

  const handleSubmit=()=>{
     // console.log("Codigo:",code," \nNombre:",name, "\nPrecio:",price)
      let product={codigo:code, nombre:name,precio:price};
      axios
      .post(`https://615610d8e039a0001725a8f2.mockapi.io/users`, product)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
      setShowModal(false);
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
       
       article=response.data[0].nombre;
            alert(`articulo ya existente: ${article}`);
     
       
     
        
    } catch (e) {
      console.log(e)
      setShowModal(true);
    }
  //  alert(`Codigo: ${data} \nArticulo: ${article}!`);
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



         <View>
         <Box alignItems="center">
      <FormControl  w="75%" maxW="300px">
        <FormControl.Label>Codigo</FormControl.Label>
        <Input value={code} />
        <FormControl.Label>Nombre</FormControl.Label>
        <Input value={name} onChangeText={handleNameChange} />
        <FormControl.Label>Precio</FormControl.Label>
        <Input value={price}  onChangeText={handlePriceChange} />
      
      </FormControl>
      <Button title="submit" onPress={()=>handleSubmit()} />
    </Box>


       

           
            </View> 
            <View>
              
            <Button title="cerar" onPress={()=>setShowModal(false)} />
            </View>
         
        </Modal> 

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
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
  input:{
        borderWidth:10,
        borderColor:"#ddd",
        padding:10,
        fontSize:10,
        borderRadius:6,
  },
});
