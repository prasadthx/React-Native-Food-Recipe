/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Recipe from './src/screens/Recipe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    // <NavigationContainer>
    //     <Stack.Navigator
    //         screenOptions={{
    //             headerShown: false
    //         }}
    //         initialRouteName={'Login'}
    //     >
    //         <Stack.Screen name="Login" component={Login}/>
    //         <Stack.Screen name="Home" component={Home}/>
    //         <Stack.Screen name="Recipe" component={Recipe}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
    <Login/>
  )
}

export default App;
