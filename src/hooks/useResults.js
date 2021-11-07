import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { apiCall } from "../Redux/ActionCreators";

export default () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.apiReducer.data)

    const searchApi = (searchTerm) => {
        try {
            setIsVisible(true)

            dispatch(apiCall('/search', searchTerm))
            setIsVisible(false)
        } catch (error) {
            setErrorMessage('something went wrong')
        }

    }
    useEffect(() => {
        searchApi('pasta')
        setIsVisible(false)

    }, [])

    return [searchApi, errorMessage, data, isVisible]
}