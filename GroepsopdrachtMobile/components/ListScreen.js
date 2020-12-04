import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';




export default ListScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const Item = ({ title }) => (                item specifieren 
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5fca6286516f9d1270281279')
      .then((response) => response.json())
      .then((json) => setData(json.features))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          //keyExtractor={(item , index) => index.toString()}
          renderItem={({ item }) => (
            <Item 
              naam = {item.attributes.NAAM} />
          )}
          keyExtractor={(item , index) => index.toString()}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
};





// export default ListScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text> [getInformationFromApiAsync] </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
