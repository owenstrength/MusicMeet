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