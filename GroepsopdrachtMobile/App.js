import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './components/MapScreen';
import ListScreen from './components/ListScreen'

//const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();

//icoontjes toevoegen in nav
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
