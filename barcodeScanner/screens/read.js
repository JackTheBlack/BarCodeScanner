import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { Alert, VStack, HStack,Box} from "native-base";

export default function Read({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [found,setFound]=useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

const handleAddProduct=()=>{

}



  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setFound(false);
    let article="";
    let precio=0;
    try {
      const response = await axios({
        url: `https://615610d8e039a0001725a8f2.mockapi.io/users?codigo=${data}`,
        method: "GET",
      });
    
     
            article=response.data[0].nombre
            precio=response.data[0].precio
            
        
    
    
          alert(`Codigo: ${data} \nArticulo: ${article}! \nPrecio:${precio}`);
     
    } catch (e) {
      alert(`Articulo no Encontrado`);
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
});

