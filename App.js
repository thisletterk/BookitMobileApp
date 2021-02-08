import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Tabs from './navigation/MyTabs'

const Stack = createStackNavigator()


function App() {
  return (


    <NavigationContainer>
      {Tabs()}
    </NavigationContainer>


  )
}
export default App;