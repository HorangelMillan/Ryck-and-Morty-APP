import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosLocation = (valueBoxSearch) => {

    const [location, setLocation] = useState({});

    const random = () => {
        return Math.floor(Math.random() * 126) + 1;
    };

    useEffect(() => {
        if (!valueBoxSearch) {
            axios.get(`https://rickandmortyapi.com/api/location/${random()}`)
            .then(res => setLocation(res.data));
        } else {
            axios.get(`https://rickandmortyapi.com/api/location/${valueBoxSearch}`)
            .then(res => setLocation(res.data)).catch(error => console.log('the location does not exist'));
        }

    }, [ valueBoxSearch ]);

    return { location };
};

export default useAxiosLocation;