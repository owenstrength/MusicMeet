import { View, Text, Image, TouchableHighlight, Linking} from 'react-native'
import React from 'react'

import styles from "../styles/styles"

const StatsCard = ({Name, Data, Link}) => {
  return (
    <View style={styles.statsCard}>
            <Text style={styles.statsDataText}>{Data}</Text>
            <Text style={styles.statsText}>{Name}</Text>
    </View>
  )
}

export default StatsCard