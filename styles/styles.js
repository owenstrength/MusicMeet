import { StyleSheet , Dimensions} from 'react-native';

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'left',
        justifyContent: 'top',
      },
    name: {
        color: 'white',
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    headingText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    settingsText: {
      color: 'white',
      fontSize: 20,
      fontWeight: "600",
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
  },
    genreText: {
        color: 'white',
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: "#323232", //323232
        borderRadius: 8,
        borderWidth: "2%",
        borderColor: "#323232",
    },
    images: {
        height: 120,
        width: 120,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    bottomBar: {
      height: 100,
      borderRadius: 20,
      backgroundColor: '#121212',
  },
  button: {
    width: screenWidth,
    alignItems: 'left',
    justifyContent: "flex-start",
    backgroundColor: '#121212',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  mainText: {
    color: 'white',
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 20,
  },
  subText: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 50,
    marginTop: 10,
    marginBottom: "120%",
  },

  });
  
export default styles;