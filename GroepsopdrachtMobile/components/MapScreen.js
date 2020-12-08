import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { round } from 'react-native-reanimated';
import { Button } from 'react-native';
//import { markerView } from './MarkerView';  

function markerView(markerobject) {
  // console.log(markerobject.attributes.NAAM);
  return (
    <View style={styles.markerView}>
      <View style={styles.toprow}>
        <MaterialIcons style={styles.bikelogo} name="directions-bike" size={40} color="black" />
        <View style={styles.textbox}>
          <Text style={styles.title}>{markerobject.attributes.NAAM}</Text>
          <Text style={styles.address}>{markerobject.attributes.Adres}</Text>
        </View>
      </View>
      <View style={styles.bottomrow}>
        <Button title="Detail" color="blue"/>
      </View> 
    </View>

  );
}

export default MapScreen = () => {
  const [status, changeStatus] = useState(false);
  const [markerObject, changeMarker] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5fca6286516f9d1270281279')
      .then((response) => response.json())
      .then((json) => setData(json.features))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  //  console.log(status);

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
        {data.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.geometry.y, longitude: marker.geometry.x }}
            onPress={() => {
              const showView = !status; changeStatus(showView),
                changeMarker(marker)
            }} />
        ))}
      </MapView>
      { status != false ? markerView(markerObject) : null}
    </View>
  );
}

/*styles*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  mapStyle: {
    flex: 1,
  },
  markerView: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 20,
    height: 100,
    flexDirection: 'column',
    flex:1
  },
  toprow: {
    flexDirection: 'row',
    height: '60%',
    backgroundColor: 'yellow'
  },
  bikelogo: {
    height: 80,
    padding: 10
  },
  textbox: {
    flexDirection: 'column',
    height: '100%',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 1,
    height: '50%'
  },
  address: {
    textAlign: 'left',
    padding: 1,
    height: '50%'
  },
  bottomrow: {
    flexDirection: 'row',
    flex:1,
    width: '80%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems
  },
});
