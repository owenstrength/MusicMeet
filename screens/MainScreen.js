import { View, Text, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'

import styles from "../styles/styles"

const MainScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} >
        <Text style={styles.name} >User.name</Text>
        {/*Genre Display Section */}
        <Text style={styles.headingText}>Top Genres</Text>
            <ScrollView horizontal={true} bar showsHorizontalScrollIndicator={false} contentContainerStyle={{width:screenWidth}}>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
            </ScrollView>
            {/*Artist Display Section */}
        <Text style={styles.headingText}>Top Artists Past 4 Weeks</Text>
            <ScrollView horizontal={true} bar showsHorizontalScrollIndicator={false} contentContainerStyle={{width:screenWidth}}>
                <Image source={"https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea"} style={styles.images}></Image>
                <Image source={"https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea"} style={styles.images}></Image>
                <Image source={"https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea"} style={styles.images}></Image>
                <Image source={"https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea"} style={styles.images}></Image>
            </ScrollView>
            {/*Song Display Section */}
        <Text style={styles.headingText}>Top Songs Past 4 Weeks</Text>
            <ScrollView horizontal={true} bar showsHorizontalScrollIndicator={false} contentContainerStyle={{width:screenWidth}}>
                <Image source={"https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa"} style={styles.images}></Image>
                <Image source={"https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa"} style={styles.images}></Image>
                <Image source={"https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa"} style={styles.images}></Image>
                <Image source={"https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa"} style={styles.images}></Image>
            </ScrollView>
            {/* User Chosen Playlist*/}
        <Text style={styles.headingText}>User.name's playlist</Text>
            {/* User Chosen Socials*/}
        <Text style={styles.headingText}>Socials</Text>
        
        </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen