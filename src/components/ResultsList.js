import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ResultsDetail from "./ResultsDetail";
const ResultsList = ({ title, results }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.titleViewStyle}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleViewStyle: {
        backgroundColor: '#F7854C',
        borderRadius: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        alignSelf: 'center',
        height: 45
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'center',
        color: '#fff'
    }
});

export default ResultsList;