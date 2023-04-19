import { View, Text, SafeAreaView, ScrollView, Dimensions, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import { getData, pushToDatabase } from '../utils/storage';
import { useState } from 'react';


import styles from "../styles/styles"
import ImageCard from '../components/ImageCard';
import { getCurrentUser, getCurrentUserTopArtist, getCurrentUserTopSongs, getUserTopGenres } from '../redux/slices/user';
import { useDispatch } from 'react-redux';
import StatsCard from '../components/StatsCard';
import GenreCard from '../components/GenreCard';



const MainScreen = () => {

  const dispatch = useDispatch();
  const [UserName, SetUserName] = useState(null);
  const [ArtistData, SetArtistData] = useState(null);
  const [SongData, SetSongData] = useState(null);
  const [GenreData, SetGenreData] = useState(null);

  const fetchData = async () => {
    const data = await getData('@userData').then((data) => {

      SetUserName(JSON.parse(data).display_name)
      dispatch(getCurrentUserTopArtist()).then(() => {
        console.log("TOP ARTISTS FETCHED")
        dispatch(getCurrentUserTopSongs()).then(() => {
          console.log("TOP SONGS FETCHED")
        })
        dispatch(getUserTopGenres()).then(() => {
          console.log("TOP Genres FETCHED")
        })
        pushToDatabase()
      })
    })
    return data
  };



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

  const fetchGenre = async () => {
    const data = await getData('@userTopGenres').then((data) => {
      SetGenreData(JSON.parse(data))
      console.log("genre set")
    })
    return data
  };

  if (GenreData == null) {
    fetchGenre();
  }

  fetchData();


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        <Text style={styles.name} >Hey {UserName}</Text>

        {/*Genre Display Section */}
        <Text style={styles.headingText}>Top Genres</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={{width:screenWidth}}
          data={GenreData}
          renderItem={({ item }) => <GenreCard Genre={item} ></GenreCard>}
          keyExtractor={item => item.id}
        />
        {/*Artist Display Section */}
        <Text style={styles.headingText}>Your Stats</Text>
        <View style={{ flexDirection: "row" }}>
          <StatsCard Name="Minutes Listened" Data="12382"></StatsCard>
          <StatsCard Name="Total Streams" Data="283912"></StatsCard>
        </View>

        <View style={{ flexDirection: "row" }}>
          <StatsCard Name="Different Artists" Data="2314"></StatsCard>
          <StatsCard Name="Different Tracks" Data="9823"></StatsCard>
        </View>
        <Text style={styles.headingText}>Top Artists</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={{width:screenWidth}}
          data={ArtistData}
          renderItem={({ item }) => <ImageCard imageUri={item.images[0].url} Name={item.name} Link={item.external_urls.spotify}></ImageCard>}
          keyExtractor={item => item.id}
        />
        {/*Song Display Section */}
        <Text style={styles.headingText}>Top Songs</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={{width:screenWidth}}
          data={SongData}
          renderItem={({ item }) => <ImageCard imageUri={item.album.images[0].url} Name={item.name} Artist={item.album.artists[0].name} Rank={item.index} Link={item.external_urls.spotify}></ImageCard>}
          keyExtractor={item => item.id}
        />
        {/* User Chosen Playlist*/}
        {/* User Chosen Socials*/}

      </ScrollView>
    </SafeAreaView >
  )
}

export default MainScreen