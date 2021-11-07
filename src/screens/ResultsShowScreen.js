import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux'
import { apiDetails } from '../Redux/ActionCreators'
const ResultsShowScreen = ({ route, navigation }) => {
    const { params } = route;
    const { id } = params;
    const [result, setResult] = useState(null);
    const dispatch = useDispatch();
    const details = useSelector((state) => state.apiReducer.details)
    const getResult = async (id) => {
        console.log(id)
        try {
            dispatch(apiDetails(`/${id}`))
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!details) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                        <Ionicons
                            style={{ marginLeft: 20 }}
                            name="arrow-back"
                            color="#000"
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Restaurant Details</Text>
                </View>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
                    <View style={styles.slide1}>
                        <ImageBackground
                            imageStyle={styles.image}
                            style={styles.image}
                            source={{ uri: details.photos[0] }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <ImageBackground
                            imageStyle={styles.image}
                            style={styles.image}
                            source={{ uri: details.photos[1] }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <ImageBackground
                            imageStyle={styles.image}
                            style={styles.image}
                            source={{ uri: details.photos[2] }}
                        />
                    </View>
                </Swiper>
            </View>
            <Text style={styles.title}>{details.name}</Text>
            <View style={{ marginTop: 50 }}>
                <Text style={{ alignSelf: 'center', color: '#7C7C7C' }}>
                    {details.location.display_address}
                </Text>
                <Text style={{ alignSelf: 'center', marginTop: 10, color: '#7C7C7C' }}>
                    {details.phone}
                </Text>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 60
    },
    wrapper: { color: '#000' },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: 250,
        width: 250,
        borderRadius: 125,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#000',
        marginTop: 50,
        fontWeight: 'bold',
    },
    titleView: {
        width: '100%',
        height: '50%',
        backgroundColor: '#EBEDEF',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
    },
});
export default ResultsShowScreen;
