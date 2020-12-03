import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

//Fetch API
const ApiUrl = "https://opendata.arcgis.com/datasets/99c7168df28142958cbfec31cd633d56_289.geojson";
function getData() {
  return fetch(ApiUrl)
  .then(data => data.json())
}

export default MapScreen = () => {
  const [data, setData] = useState();
  useEffect(()=> {
    getData()
    .then(items => {
      setData(items)
    })
  }, []);
  console.log(data);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} mapType={"standard"}
        region={{
          latitude: 51.231107,
          longitude: 4.415127,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 1,
  }
});
