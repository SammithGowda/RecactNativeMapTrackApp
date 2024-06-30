import { useState, useEffect, useContext } from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
export default (shouldWacth, callback) => {
    const [err, setErr] = useState(null)
    
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            const { granted } = await requestForegroundPermissionsAsync();//user permission
            if (!granted) setErr("Please allow location access...")
            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, callback);

        }

        if (shouldWacth) {
            startWatching()
        } else {
            //reomve
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldWacth,callback])
    return [err]
}