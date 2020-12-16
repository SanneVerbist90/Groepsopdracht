import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default cameraScreen = ({route}) => {
  const picture = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [ image, setImage] = useState();
  const camera = useRef();
 console.log(picture.id);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async() => {
    let picture = await camera.current.takePictureAsync();
   setImage(picture);
  }

  FileSystem.moveAsync({
    from: `${image.uri}`,
   to: `${FileSystem.documentDirectory}Camera/${picture.id}.jpg`
  })

  if(image) console.log(image.uri);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>         
        </View>
        <Button title="Take Picture" onPress={takePicture}/>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
