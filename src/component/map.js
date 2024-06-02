import { StyleSheet, Text } from "react-native"
import MapView, { Polyline } from "react-native-maps"
const Map = () => {

    let points = [];
    for (let index = 0; index < 10; index++) {
        points.push({
            latitude: 18.5204 + index * 0.01,
            longitude: 73.8765 + index * 0.01
        })

    }
    return <MapView
        style={styles.mapStyle}
        initialRegion={{
            latitude: 18.5204,
            longitude: 73.8765,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }}
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