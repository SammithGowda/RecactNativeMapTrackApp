import { ActivityIndicator, StyleSheet, Text } from "react-native"
import MapView, { Polyline } from "react-native-maps"
import { Context as LocationContext } from "../context/locationContext";
import { useContext } from "react";
const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)
    let points = [];
    for (let index = 0; index < 10; index++) {
        points.push({
            latitude: 18.5204 + index * 0.01,
            longitude: 73.8765 + index * 0.01
        })

        if (!currentLocation) {
            return <ActivityIndicator />
        }

    }
    return <MapView
        style={styles.mapStyle}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }}
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.1,
        //     longitudeDelta: 0.1,
        // }}
    >
        <Polyline coordinates={points} fillColor="red" />

    </MapView>

}

const styles = StyleSheet.create({
    mapStyle: {
        height: 300,
    }
});

export default Map;