import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Facebook from './screens/fb';
import Insta from './screens/insta';


export default function App() {
  return (

    <AppContainer/>

  );
}

var TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Insta}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
