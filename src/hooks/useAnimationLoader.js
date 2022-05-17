import { useState, useEffect } from "react";

const useAnimationLoader = () => {

    const [loader, setLoader] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (document.readyState === 'complete') {
            console.log('de readyState')
            setLoader(true);
            setTimeout(() => {
                setHidden(true);
                setTimeout(() => {
                    setIsLoad(true);
                }, 2000);
            }, 3000);
        } else {
            window.addEventListener('load', (e) => {
                console.log('de addEventListener', e)
                setLoader(true);
                setTimeout(() => {
                    setHidden(true);
                    setTimeout(() => {
                        setIsLoad(true);
                    }, 2000);
                }, 3000);
            });
            return window.removeEventListener('load', (e) => {
                console.log('de removeEventListener', e)
                setLoader(true);
                setTimeout(() => {
                    setHidden(true);
                    setTimeout(() => {
                        setIsLoad(true);
                    }, 2000);
                }, 3000);
            });
        };
    }, [loader, isLoad]);

    return { loader, isLoad, hidden }

};

export default useAnimationLoader;