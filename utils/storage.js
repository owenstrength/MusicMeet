import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (name,data) => {
    try {
      await AsyncStorage.setItem(name, data);
      console.log(name + " saved")
    } catch (e) {
      // saving error
      console.log("Error", e);
    }
  };


export const getData = async(name) => {
    try {
      const response = await AsyncStorage.getItem(name); 
      return response
    } catch (error) {
        return error
    }
}


export const logOut = async() => {
    await AsyncStorage.clear();
}

export const pushToDataBase = async() => {

    const userID = ""
    const userData = ""
    const userTopArtists = ""
    const userTopSongs = ""

    try {
        await getData("@userid")
        .then(data => data)
        .then(userid => {
        userID = userid
        })

        await getData("@userData")
        .then(data => data)
        .then(data => {
        userData = data
        })

        await getData("@userTopArtists")
        .then(data => data)
        .then(data => {
        userTopArtists = data
        })

        await getData("@userTopSongs")
        .then(data => data)
        .then(data => {
        userTopSongs = data
        })

        //SEND TO MONGODB

    } catch (error) {
        return error
    }
}