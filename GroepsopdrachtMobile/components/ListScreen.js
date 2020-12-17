import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Pressable } from 'react-native';

export default ListScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //data ophalen 
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5fca6286516f9d1270281279')
      .then((response) => response.json())
      .then((json) => setData(json.features))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //view
  const Item = ({ title, adres }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.adres}>{adres}</Text>
    </View>
  );
  
//controller --> in python is dit de serialliser --> hetgene dat je ophaalt "vertalen" zodat dit programma het verstaat
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('DetailScreen',{location:item})}>
      <Item 
      title={item.attributes.NAAM} 
      adres={item.attributes.Adres}
      id={item.attributes.OBJECTID}
      />      
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item , index) => index.toString()} 
        />
      )}
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
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  adres:{
    fontSize: 15,
    color:'gray',          
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
