import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';

export default DetailScreen = ({route, navigation}) => {
  const loc = route.params;
  
  const item = loc.location.attributes;

  let key = item.OBJECTID;

  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const saveItem =  async () =>{
    try{
      let jsonItem = JSON.stringify(item);
      await AsyncStorage.setItem(key.toString() ,jsonItem); //key 
    }
    catch(e){
      console.log(e)
    }
  };

  return (
    <View style={styles.container}>
      <Text key= 'bikeHotspot' style={styles.titel}>{loc.location.attributes.NAAM}{"\n"}</Text>
      <Text style={styles.titelDetail}>Naam:</Text> 
      <Text style={styles.detail}>{loc.location.attributes.NAAM}{"\n"}</Text>
      <Text style={styles.titelDetail}>Adres:</Text>
      <Text style={styles.detail}>{loc.location.attributes.Adres}{"\n"}</Text>
      <Text style={styles.titelDetail}>Aantal fietsplaatsen:</Text>
      <Text style={styles.detail}>{loc.location.attributes.Max_Fiets}{"\n"}</Text>
      {/* <Button 
        title='Voeg toe aan favorieten' 
        style={styles.button} 
        type='button' 
        
        onPress={(event)=> saveItem()} //event.nativeEvent.item

      /> */}
      <TouchableOpacity onPress={(event)=> saveItem()} style={styles.button}>
        <TouchableOpacity onPress={() => toggleFunction()}  
          type='button' >
          <Text style={styles.buttonText}>{toggle ? 'Voeg toe aan favorieten' : 'Verwijder uit favorieten'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor: 'white',
    justifyContent: 'center',
    width:'92%',
    height:'auto',
    backgroundColor:'#fff',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: 'lightgray',
    marginTop: '4%',
  },
  titel:{
    fontWeight: 'bold',
    fontSize: 20,

  },
  button:{
    justifyContent: 'center',
    backgroundColor:'lightblue',
    backgroundColor: "#0064b5",
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText:{
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  titelDetail:{
    fontWeight: 'bold',
  },
  detail:{
    color: '#24252a',
  }
});
