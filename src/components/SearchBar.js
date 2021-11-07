import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const SearchBar = ({ term, onChangeTerm, onTermSubmitt }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' size={30} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                placeholderTextColor='#6A6C6C'
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onTermSubmitt}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        color: '#000',
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
export default SearchBar;