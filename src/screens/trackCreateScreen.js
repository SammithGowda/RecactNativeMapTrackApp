import "../_mockLocation"
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../component/map";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location"
const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)
    const startWatching = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) setErr("Please allow location access...")
        await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
        }, (location) => {
            console.log(location);
        })
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView style={{ paddingTop: 30, fontWight: "bold" }}>
            <Text style={{ fontSize: 30, }}>Track Create Screen</Text>
            <Map />
            {err ? <Text>{err}</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;