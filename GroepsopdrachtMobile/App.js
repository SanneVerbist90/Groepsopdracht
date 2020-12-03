import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './components/MapScreen';
import ListScreen from './components/ListScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//icoontjes toevoegen in nav
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapViewScreenStack} />
        <Tab.Screen name="Lijst" component={ListScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export const MapViewScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="MapScreen" component={MapScreen} options ={{ title: "Map"}}/>
    </Stack.Navigator>
  )
}

export const ListScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="ListScreen" component={ListScreen} options ={{ title: "List"}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
