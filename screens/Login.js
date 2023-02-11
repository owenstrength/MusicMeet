import { Text, SafeAreaView, View, TouchableOpacity, Dimensions } from 'react-native'
import { useEffect } from 'react'
import { ResponseType, useAuthRequest } from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { getData, storeData } from "../utils/storage";
import { getCurrentUser, getCurrentUserTopArtist } from "../redux/slices/user";

import styles from "../styles/styles"
const screenWidth = Dimensions.get("screen").width;

var CLIENT_ID = process.env.CLIENT_ID
var CLIENT_SECRET = process.env.CLIENT_SECRET


const Login  = ({navigation}) => {
  const dispatch = useDispatch();

  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://192.168.1.64:19000",
    },
    discovery
  );

  useEffect(() => {

    if (response?.type === "success") {
      console.log(response)
      const { access_token } = response.params;
      console.log(access_token)
      storeData("@access_token", access_token).then(() => {
        dispatch(getCurrentUser()).then(() => {
          dispatch(getCurrentUserTopArtist()).then(() => {
            navigation.navigate("Home");
          });
        });
      })
      
    }
  }, [response]);



    return (
       <SafeAreaView style={styles.container}>
        <Text style={styles.mainText}>Wavelength</Text>
        <Text style={styles.subText}>The best way to meet others with the same music taste</Text>
      <TouchableOpacity onPress={() => promptAsync()}>
        <View style={{
            backgroundColor: "green",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            width: screenWidth * 0.5
          }}>
          <Text style={styles.text}>Login via Spotify</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("terms agree")}>
        <View style={{
            backgroundColor: "#41688a",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            width: screenWidth * 0.5,
            marginTop: 20
          }}>
          <Text style={styles.text}>Terms and Conditions</Text>
        </View>
      </TouchableOpacity>
      
    </SafeAreaView>
    )
  
}

export default Login