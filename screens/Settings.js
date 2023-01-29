import { View, Text, SafeAreaView, FlatList, ScrollView, TouchableHighlight } from 'react-native'
import React from 'react'
import { logOut } from '../utils/storage'

import { getData } from '../utils/storage'
import styles from "../styles/styles"

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>Settings</Text>
        <ScrollView bounces={false}>
          <TouchableHighlight underlayColor="white" onPress={() => { let data = getData(); console.log(data);}}>
            <View style={styles.button}>
              <Text style={styles.settingsText}>Account</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" onPress={() => {console.log("button 1");}}>
            <View style={styles.button}>
              <Text style={styles.settingsText}>About</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" onPress={() => {console.log("button 1");}}>
            <View style={styles.button}>
              <Text style={styles.settingsText}>Notifications</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" onPress={() => {logOut(); navigation.navigate("Login")}}>
            <View style={styles.button}>
              <Text style={styles.settingsText}>Log Out</Text>
            </View>
          </TouchableHighlight>
        

        </ScrollView>
      {/* List of Settings to chana
      ge
      -log out
      -location distance?
      -about
      -notificatoins
      -account
        -reset password
        */}
    </SafeAreaView>
  )
}

export default Settings