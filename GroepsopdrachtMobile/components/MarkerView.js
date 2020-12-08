import { StyleSheet, Text, View } from 'react-native';

export default function markerView() {
    return(
        console.log("Press"),
        <View style={styles.markerView}>
            <Text>Titel</Text>
            <Text>adres</Text>
            <Text>Button</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    markerView:{
       flex:1,
        backgroundColor: 'red',
        alignItems: 'stretch'
      },
  });
  