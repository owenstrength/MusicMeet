import AsyncStorage from "@react-native-async-storage/async-storage";

import { sendDataToServer } from "./mongoDBUtils";

export const storeData = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, data);
    console.log(name + " saved")
  } catch (e) {
    // saving error
    console.log("Error", e);
  }
};


export const getData = async (name) => {
  try {
    const response = await AsyncStorage.getItem(name);
    return response
  } catch (error) {
    return error
  }
}


export const logOut = async () => {
  await AsyncStorage.clear().then();
}

const dataToJSON = async () => {
  const userID = await getData("@userid"); // retrieve the user ID from local storage
  const userData = await getData("@userData"); // retrieve the user data from local storage
  const userTopArtists = await getData("@userTopArtists"); // retrieve the user's top artists from local storage
  const userTopSongs = await getData("@userTopSongs"); // retrieve the user's top songs from local storage
  const userTopGenres = await getData("@userTopGenres"); // retrieve the user's top genres from local storage

  const user = { // create an object containing all of the user's data
    _id: userID,
    data: userData,
    topArtists: userTopArtists,
    topSongs: userTopSongs,
    topGenres: userTopGenres,
  };

  return user;
}


export const pushToDatabase = async () => {
  try {
    await dataToJSON().then(async user => {
      const result = await sendDataToServer(user);
      return result;
    }); // convert the user's data to JSON

  } catch (error) {
    console.error("STORAGE.JS" + error);
    return error;
  }
};