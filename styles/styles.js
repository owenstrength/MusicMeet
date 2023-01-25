import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'left',
      justifyContent: 'top',
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
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 32,
        marginBottom: 32,
    },
    headingText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 32,
        marginBottom: 20,
    },
    genreText: {
        color: 'white',
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 32,
        marginBottom: 32,
        //backgroundColor: "#323232", //323232
        borderRadius: 8,
        borderWidth: "4%",
        borderColor: "#323232"
    },
    images: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    }
  });
  
export default styles;