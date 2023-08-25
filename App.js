import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import StarCrafts from './Screens/StarCrafts';
import StarMap from './Screens/StarMap';
import DailyPics from './Screens/DailyPics';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="DailyPics" component={DailyPics}></Stack.Screen>
        <Stack.Screen name="StarMap" component={StarMap}></Stack.Screen>
        <Stack.Screen name="StarCrafts" component={StarCrafts}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
