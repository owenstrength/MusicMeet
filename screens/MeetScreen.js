import { View, Text, SafeAreaView, ScrollView, Dimensions, FlatList } from 'react-native'
import React from 'react'

import styles from "../styles/styles"
import ImageCard from '../components/ImageCard';

const MeetScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const temp = "https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa";

  // data will be in a seperate file. data will be a funcotin that fetches from 
  // the mongo database uing graph ql and apollo. could just send a REST call to 
  // mongo but scalability calls for graph ql.

  // login in with spotify. if email in database - assign data
  // if email not in database add to database

  const ARTIST_DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: 'https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: 'https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea',
    },
    {
      id: '58694a0f-4da1-471f-bd96-145871e29d72',
      title: 'Fourth Item',
      image: 'https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea',
    },
  ];

  const SONG_DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: "https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: "https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: "https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa",
    },
    {
      id: '58694a0f-4da1-471f-bd96-145871e29d72',
      title: 'Fourth Item',
      image: "https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa",
    },
  ];
  

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} >
        <Text style={styles.name} >New User.name</Text>
        {/*Genre Display Section */}
        <Text style={styles.headingText}>Top Genres</Text>
            <ScrollView horizontal={true} bar showsHorizontalScrollIndicator={false} contentContainerStyle={{width:screenWidth}} disableIntervalMomentum={true} pagingEnabled={true}>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
                <Text style={styles.genreText}>Genre</Text>
            </ScrollView>
            {/*Artist Display Section */}
        <Text style={styles.headingText}>Top Artists Past 4 Weeks</Text>
            <FlatList 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            //contentContainerStyle={{width:screenWidth}}
            data={ARTIST_DATA}
            renderItem={({item}) => <ImageCard imageUri={item.image}></ImageCard>}
            keyExtractor={item => item.id}
            />
            {/*Song Display Section */}
        <Text style={styles.headingText}>Top Songs Past 4 Weeks</Text>
        <FlatList 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            //contentContainerStyle={{width:screenWidth}}
            data={SONG_DATA}
            renderItem={({item}) => <ImageCard imageUri={item.image}></ImageCard>}
            keyExtractor={item => item.id}
            />
            {/* User Chosen Playlist*/}
        <Text style={styles.headingText}>User.name's playlist</Text>
            {/* User Chosen Socials*/}
        <Text style={styles.headingText}>Socials</Text>
        
        </ScrollView>
    </SafeAreaView>
  )
}

export default MeetScreen