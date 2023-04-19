import { View, Text, Image, TouchableOpacity, TouchableHighlight, Linking } from 'react-native'
import React from 'react'

import styles from "../styles/styles"


const GenreCard = ({ Genre }) => {
    return (
        <View style={styles.genreCard}>
            {Genre != null ? (
                <Text style={styles.genreText}>{Genre}</Text>
            ) : (
                <Text style={styles.genreText}>loading...</Text>
            )}


        </View>
    )
}

export default GenreCard