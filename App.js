import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider, useSelector } from "react-redux";
import { store } from "./redux";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MainScreen from "./screens/MainScreen.js"
import Settings from "./screens/Settings.js"
import MeetScreen from './screens/MeetScreen.js';
import Login from './screens/Login.js';
import styles from "./styles/styles.js"

import { getData } from "./utils/storage.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs() {
    return (
        <Tab.Navigator
        barStyle={styles.bottomBar}
        activeColor="#1DB954"
        inactiveColor="white"
        tabBarColor="#323232"
        tabBarBadge="2"
        screenOptions={{ tabBarStyle: {}}}
        >
        <Tab.Screen name="Main" options={{ headerShown: false, 
              tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />)}}  component={MainScreen} />
        <Tab.Screen name="Meet" options={{ headerShown: false, 
              tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />)}}  component={MeetScreen} />
        <Tab.Screen name="Account" options={{ headerShown: false, 
              tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />)}}  component={Settings} />
        </Tab.Navigator>
        )
      }
  

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MyTabs}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const fetchUser = async () => {
    await getData("@access_token")
    .then(data => data)
    .then(user => {
      console.log("yourKey Value:  " + user)
    
    if (!user) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    })
  };
  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isAuthenticated ? ( 
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Home" component={MyTabs}></Stack.Screen>
          </Stack.Navigator>
        ) : ( 
        <MainStack></MainStack>
        )}
        </NavigationContainer>
      </Provider>
  );
}