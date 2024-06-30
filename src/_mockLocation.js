import * as Location from "expo-location"

const meterInDegrees = 0.0001;

const getLocation = (increment) => {
    // console.log(increment)
    return {
        timeStamp: 100000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            alltitude: 5,
            longitude: 73.76479309394087 + increment * meterInDegrees,
            latitude: 18.58056799637298 + increment * meterInDegrees
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++;
}, 1000);