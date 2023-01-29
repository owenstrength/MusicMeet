import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { ResponseType, useAuthRequest } from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/slices/user";

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

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
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      storeData("@access_token", access_token);
      dispatch(getCurrentUser());
      navigation.navigate("Home", { screen: "Home" });
    }
  }, [response]);



    return (
       <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => promptAsync()}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    )
  
}

export default Login