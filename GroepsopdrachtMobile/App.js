import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './components/MapScreen';
import ListScreen from './components/ListScreen';
import { Feather } from '@expo/vector-icons';
import DetailScreen from './components/DetailScreen';
import Camera from './components/Camera';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//StartScherm

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Maps" component={MapViewScreenStack} options={{
          tabBarIcon: ({ color, size }) => (
            < Feather name="map" size={24} color="black" />)
        }}/>
         
        <Tab.Screen name="List" component={ListScreenStack} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={24} color="black" />)
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//ScreenStacks
export const MapViewScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: "Map" }}/>
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: "Detail" }} />
      <Stack.Screen name="Camera" component={Camera} options={{ title: "Camera" }} />
    </Stack.Navigator>
  )
}

export const ListScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: "List" }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: "Detail" }} />
    </Stack.Navigator>
  )
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
