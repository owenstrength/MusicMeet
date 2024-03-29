import { StyleSheet, Dimensions } from 'react-native';

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
    fontSize: 32,
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
  cardText: {
    color: 'white',
    textShadowRadius: 5,
    textShadowColor: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 30,
    marginRight: 10,
    marginTop: -15,
    zIndex: 100,
    width: 130,
    textAlign: 'center',
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
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  images: {
    height: 150,
    width: 150,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 10,
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
  statsCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: screenWidth * 0.45,
    margin: 10,
    zIndex: 10,
  },
  genreCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: -5,
    zIndex: 10,
  },
  statsText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  statsDataText: {
    color: '#1DB954',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  }

});

export default styles;