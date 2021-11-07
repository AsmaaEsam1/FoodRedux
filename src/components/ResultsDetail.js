import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.View}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars
            </Text>
            <Text>{result.review_count} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    View: {
        marginLeft: 15,
        width: 160,
        height: 270,
        alignItems: 'center',
        backgroundColor: '#EBEDEF',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    name: {
        fontWeight: 'bold',
    }
})
export default ResultsDetail;