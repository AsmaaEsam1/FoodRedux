import Yelp from '../api/Yelp'
import {
    fetchData, fetchSuccess, fetchError, fetchDetails
} from './Action'

export const apiCall = (url, term) => dispatch => {
    dispatch(fetchData());
    return new Promise(async () => {
        await Yelp.get(url, {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        }).then(response => {
            dispatch(fetchSuccess(response.data.businesses))

        }).catch(error => {
            dispatch(fetchError(error))
            console.log(error);
        })
    })
}

export const apiDetails = (id) => dispatch => {
    dispatch(fetchData());
    return new Promise(async () => {
        await Yelp.get(id).
            then(response => {
                dispatch(fetchDetails(response.data))

            }).catch(error => {
                dispatch(fetchError(error))
                console.log(error);
            })
    })
}