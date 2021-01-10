import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import productdetails from './app/screens/productdetails';
import loginscreen from './app/screens/loginscrenn';
import home from './app/screens/homescreen';
import registerscreen from './app/screens/registerscreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator> 
    <Stack.Screen options={{headerShown:false}} name="Login" component={loginscreen} />
    <Stack.Screen  name="register" component={registerscreen} />

    <Stack.Screen  name="home" component={home} />

    <Stack.Screen  name="productdetails" component={productdetails} />





   
     
    </Stack.Navigator>

</NavigationContainer>
  );
}


