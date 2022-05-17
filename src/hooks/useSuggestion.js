import { useState, useEffect } from 'react';
import axios from 'axios';

const useSuggestion = (mod) => {
    const [handlerInput, setHandlerInput] = useState();
    const [searchLocation, setSearchLocation] = useState([]);

    useEffect(() => {
        if (mod) {
            axios.get(`https://rickandmortyapi.com/api/location/?name=${handlerInput}`)
                .then(res => setSearchLocation(res.data?.results))
                .catch(error => console.log('Location not found'));
        };
    }, [handlerInput, mod]);

    return { handlerInput, searchLocation, setHandlerInput };
};

export default useSuggestion;