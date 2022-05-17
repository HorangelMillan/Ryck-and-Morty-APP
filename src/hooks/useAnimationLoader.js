import { useState, useEffect } from "react";

const useAnimationLoader = () => {

    const [loader, setLoader] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setLoader(true);
            setTimeout(() => {
                setHidden(true);
                setTimeout(() => {
                    setIsLoad(true);
                }, 2000);
            }, 3000);
        };
    }, [loader, isLoad]);

    return { loader, isLoad, hidden }

};

export default useAnimationLoader;