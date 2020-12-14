import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';




export default DetailScreen = ({route, navigation}) => {
  const loc = route.params;

  //console.log(route.params);

  return (
    <View style={styles.container}>      
        <Text style={styles.title}>{loc.location.attributes.NAAM}</Text>
        <Text style={{fontWeight:'bold'}}>Naam: </Text>         
        <Text>{loc.location.attributes.NAAM}</Text>
        <Text style={{fontWeight:'bold'}}>Adres </Text> 
        <Text>{loc.location.attributes.Adres}</Text>
        <Text style={{fontWeight:'bold'}}>Aantal Fietsplaatsen </Text> 
        <Text>{loc.location.attributes.Max_Fiets}</Text>        
      <StatusBar style="auto"/>
    </View>
  );
};


const styles = StyleSheet.create({
  item:{
    padding:20,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'lightslategrey',

  // },
  // icon:
  // {

  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  adres:{
    fontSize: 15,
    color:'gray',             //aanpassen android
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
