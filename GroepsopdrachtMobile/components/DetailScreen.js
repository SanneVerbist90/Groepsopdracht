import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';




export default DetailScreen = ({route, navigation}) => {
  const loc = route.params;


  return (
    <View style={styles.container}>
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
  }
});
