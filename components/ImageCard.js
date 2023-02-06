import { View, Text, Image, TouchableHighlight, Linking} from 'react-native'
import React from 'react'

import styles from "../styles/styles"

const ImageCard = ({imageUri, Rank, Name, Artist, Link}) => {
  return (
    <TouchableHighlight onPress={() => Linking.openURL(Link)}>
    <View>
        <Image source={{uri: imageUri}} style={styles.images}></Image>
          {Artist == null ? (
            <Text style={styles.cardText}>{Name}</Text>
          ) : (
            <Text style={styles.cardText}>{Name} {"\n"} - {Artist}</Text>
          )} 
        
      
    </View>
    </TouchableHighlight>
  )
}

export default ImageCard