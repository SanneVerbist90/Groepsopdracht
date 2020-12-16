import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'react-native';
import Camera from './Camera';




export default DetailScreen = ({route, navigation}) => {
  const loc = route.params;
  console.log(loc.location.attributes.OBJECTID);
  return (
    <View style={styles.container}>
      <Image source={{uri: Camera.image}} style={styles.image}  />
        <Text style={styles.titel}>{loc.location.attributes.NAAM}{"\n"}</Text>
      <View style={styles.duo}>
        <Text style={styles.titelDetail}>Naam:</Text>
        <Text style={styles.detail}>{loc.location.attributes.NAAM}{"\n"}</Text>
      </View>
      <View style={styles.duo}>
        <Text style={styles.titelDetail}>Adres:</Text>
        <Text style={styles.detail}>{loc.location.attributes.Adres}{"\n"}</Text>
      </View>
      <View style={styles.duo}>
        <Text style={styles.titelDetail}>Aantal fietsplaatsen:</Text>
        <Text style={styles.detail}>{loc.location.attributes.Max_Fiets}{"\n"}</Text>
      </View>
      <Button title="Camera" onPress={() => navigation.navigate('Camera', {id: loc.location.attributes.OBJECTID})} />
      
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
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderColor: 'lightgray',
    marginTop: '4%',
  },
  duo:{

  },
  titel:{
    fontWeight: 'bold',
    fontSize: 20,

  },
  titelDetail:{
    fontWeight: 'bold',
  },
  detail:{
    color: '#24252a',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0, 
    width: '100%',
    height: '40%',
    resizeMode: 'contain',  
  }
});
