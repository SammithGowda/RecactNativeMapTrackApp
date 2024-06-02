import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Platform } from "react-native";
import Map from "../component/map";
const TrackCreateScreen = () => {

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
            <Text h2>Track Create Screen</Text>
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;