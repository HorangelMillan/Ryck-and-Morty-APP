import { useState, useEffect } from "react";

const useAnimationLoader = () => {

    const [loader, setLoader] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [hidden, setHidden] = useState(false);

    const hideenLoader = () => {
        setTimeout(() => {
            setIsLoad(true);
        }, 2000);
    }

    useEffect(() => {
        if (document.readyState === 'complete') {
            setLoader(true);
            setTimeout(() => {
                setHidden(true);
                hideenLoader();
            }, 3000);
        };
    }, [loader, isLoad]);

    return {loader, isLoad, hidden}

};

export default useAnimationLoader;