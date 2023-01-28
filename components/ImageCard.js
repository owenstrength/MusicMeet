import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from "../styles/styles"

const ImageCard = ({imageUri, Rank, Name}) => {
  return (
    <View>
      <Image source={{uri: imageUri}} style={styles.images}></Image>
    </View>
  )
}

export default ImageCard