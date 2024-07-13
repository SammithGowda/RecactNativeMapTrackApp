import "../_mockLocation"
import React, { useEffect, useState, useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../component/map";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location"
import { Context as LocationContext } from "../context/locationContext";
import useLoaction from "../hooks/useLoaction";
import TrackForm from "../component/trackForm";
import {FontAwesome} from "@expo/vector-icons"
const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation, state } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, state.recording)
    }, [state.recording]);
    const [err] = useLoaction(isFocused || state.recording, callback)

    //*********************************************************************************************************************** */
    // below code the alternative logic against the udemy leacture video
    //in import useLoaction from "../hooks/useLoaction"; component inside useEffect dependecy [] use recoding varibale from locationContext insted callback
    //that is my logic im not sure write are wrong but it kinda works iduuno
    // const [err] = useLoaction(isFocused, (location) => {
    //     addLocation(location, state.recording)
    // })
    //*********************************************************************************************************************** */

    return (
        <SafeAreaView style={{ paddingTop: 30, fontWight: "bold" }}>
            <Text style={{ fontSize: 30, }}>Track Create Screen</Text>
            <Map />
            <TrackForm />
            {err ? <Text>{err}</Text> : null}
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions={
    title:"Add Trcak",
    tabBarIcon:<FontAwesome name="plus-circle" size={20} color={'black'}/>
}
const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);