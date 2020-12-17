import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as FileSystem from 'expo-file-system';

export default DetailScreen = ({ route, navigation }) => {
  const loc = route.params;
  const item = loc.location.attributes;
  let key = item.OBJECTID;

  const [location, setLocation] = useState('');
  const [toggle, setToggle] = useState(true);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const saveItem = async (item) => {
    try {
      let jsonItem = await AsyncStorage.getItem('@Key')
      if (jsonItem != null) {
        let jsonArray = JSON.parse(jsonItem);
        jsonArray.push(item);
        await AsyncStorage.setItem('@Key', JSON.stringify(jsonArray));
        console.log(jsonArray);
        return;
      }
      jsonItem = JSON.stringify(item);
      await AsyncStorage.setItem('@Key', `[${jsonItem}]`);
    }
    catch (e) {
      console.log(e)
    }
  };

  const getPhotoUri = async () => {
    await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}${loc.location.attributes.OBJECTID}`)
      .then(({ uri }) => {
        setLocation(uri);
      })
      .catch(error => {
        console.error(error);
      });
  };
  getPhotoUri();

  return (
    <View style={styles.container}>
      { location ? <Image source={{ uri: location }} style={styles.image} /> : null}
      <Text key='bikeHotspot' style={styles.titel}>{loc.location.attributes.NAAM}{"\n"}</Text>
      <Text style={styles.titelDetail}>Naam:</Text>
      <Text style={styles.detail}>{loc.location.attributes.NAAM}{"\n"}</Text>
      <Text style={styles.titelDetail}>Adres:</Text>
      <Text style={styles.detail}>{loc.location.attributes.Adres}{"\n"}</Text>
      <Text style={styles.titelDetail}>Aantal fietsplaatsen:</Text>
      <Text style={styles.detail}>{loc.location.attributes.Max_Fiets}{"\n"}</Text>
      <Button title="Camera" onPress={() => navigation.navigate('Camera', { id: loc.location.attributes.OBJECTID })} />
      <TouchableOpacity style={styles.button} onPress={() => { toggleFunction(); saveItem(item) }}
        type='button' >
        <Text style={styles.buttonText}>{toggle ? 'Voeg toe aan favorieten' : 'Verwijder uit favorieten'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '92%',
    height: 'auto',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: 'lightgray',
    marginTop: '4%',
  },
  titel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    backgroundColor: "#0064b5",
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  titelDetail: {
    fontWeight: 'bold',
  },
  detail: {
    color: '#24252a',
  },
  image: {
    top: 0,
    left: 0,
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    alignContent: 'stretch'
  }
});
