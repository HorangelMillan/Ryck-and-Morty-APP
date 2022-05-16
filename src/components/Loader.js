import React from 'react';
import useAnimationLoader from '../hooks/useAnimationLoader';
import ryckandmortytitle from '../images/ryckandmorty-title.png';

const Loader = () => {

    const { loader, isLoad, hidden } = useAnimationLoader();

    return (
        <div className={`loader ${isLoad ? 'hidden' : ''} ${hidden ? 'fadeOut' : ''}`}>
            {loader ? <img src={ryckandmortytitle} alt="" /> : null}
        </div>
    );
};

export default Loader;