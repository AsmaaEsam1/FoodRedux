import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import Spinner from "react-native-spinkit";
const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, errorMessage, data, isVisible] = useResults();
    const filterResultsByPrice = (price) => {

        // price === "$" || "$$" || "$$$"
        return data.filter(results => {
            return results.price === price
        })
    }
    return (
        <View style={{ flex: 1 }}>
            <SearchBar term={term} onChangeTerm={newTerm => setTerm(newTerm)}
                onTermSubmitt={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
                <Spinner style={{ alignSelf: 'center' }} isVisible={isVisible} size={200} type='ChasingDots' color='#F7854C' />

            </ScrollView>

        </View>
    )
}

export default SearchScreen