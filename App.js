import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import MainScreen from "./screens/MainScreen.js"
import styles from "./styles/styles"

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      barStyle={styles.bottomBar}
      activeColor="#1DB954"
      inactiveColor="white"
      tabBarColor="#323232"
      tabBarBadge="2"
      >
      <Tab.Screen name="Home" options={{ headerShown: false, 
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />)}}  component={MainScreen} />
      <Tab.Screen name="Meet" options={{ headerShown: false, 
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />)}}  component={MainScreen} />
      <Tab.Screen name="Account" options={{ headerShown: false, 
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />)}}  component={MainScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}