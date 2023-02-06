import { View, Text, SafeAreaView, ScrollView, Dimensions, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import { getData } from '../utils/storage';
import { useState } from 'react';


import styles from "../styles/styles"
import ImageCard from '../components/ImageCard';
import { getCurrentUser, getCurrentUserTopArtist, getCurrentUserTopSongs } from '../redux/slices/user';
import { useDispatch } from 'react-redux';



const MainScreen = () => {

  const dispatch = useDispatch();
  const [UserName, SetUserName] = useState(null);
  const [ArtistData, SetArtistData] = useState(null);
  const [SongData, SetSongData] = useState(null);

    const fetchData = async () => {
      const data = await getData('@userData').then((data) => {
        SetUserName(JSON.parse(data).display_name)
        dispatch(getCurrentUserTopArtist()).then(() => {
          console.log("TOP ARTISTS FETCHED")
          dispatch(getCurrentUserTopSongs()).then(() => {
            console.log("TOP SONGS FETCHED")
          })
        })
        })
        return data
      };
      
    
    fetchData();

  const screenWidth = Dimensions.get("window").width;
  const temp = "https://i.scdn.co/image/ab67616d0000b2733db28ea90ddea7e6b333b4aa";



  const fetchArtists = async () => {
    const data = await getData('@userTopArtists').then((data) => {
      SetArtistData(JSON.parse(data))
      console.log("artist set")
      })
      return data
    };

    if (ArtistData == null) {
      fetchArtists();
    }

    const fetchSongs = async () => {
      const data = await getData('@userTopSongs').then((data) => {
        SetSongData(JSON.parse(data))
        console.log("song set")
        })
        return data
      };
  
      if (SongData == null) {
        fetchSongs();
      }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={styles.name} >Hey {UserName}</Text>
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
        <Text style={styles.headingText}>Top Artists</Text>
            <FlatList 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            //contentContainerStyle={{width:screenWidth}}
            data={ArtistData}
            renderItem={({item}) => <ImageCard imageUri={item.images[0].url} Name={item.name} Link={item.external_urls.spotify}></ImageCard>}
            keyExtractor={item => item.id}
            />
            {/*Song Display Section */}
        <Text style={styles.headingText}>Top Songs</Text>
        <FlatList 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            //contentContainerStyle={{width:screenWidth}}
            data={SongData}
            renderItem={({item}) => <ImageCard imageUri={item.album.images[0].url} Name={item.name} Artist={item.album.artists[0].name} Rank={item.index} Link={item.external_urls.spotify}></ImageCard>}
            keyExtractor={item => item.id}
            />
            {/* User Chosen Playlist*/}
        <Text style={styles.headingText}>User.name's playlist</Text>
            {/* User Chosen Socials*/}
        <Text style={styles.headingText}>Stats</Text>
        <Text style={styles.headingText}>Build stats cards. like listening time, favorite song, last maybe link to discover more music?</Text>
        <Text style={styles.headingText}>.</Text>
        <Text style={styles.headingText}>.</Text>
        <Text style={styles.headingText}>.</Text>
        <Text style={styles.headingText}>.</Text>
        <Text style={styles.headingText}>.</Text>
        
        </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen