import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default MapScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5fca6286516f9d1270281279')
      .then((response) => response.json())
      .then((json) => setData(json.features))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

 // console.log(data.map((marker, index)=>(marker.geometry.y)));
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} mapType={"standard"}
        region={{
          latitude: 51.231107,
          longitude: 4.415127,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
          {data.map((marker, index) => (<Marker key ={index} coordinate={{latitude: marker.geometry.y, longitude: marker.geometry.x}}/>))}
         
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
