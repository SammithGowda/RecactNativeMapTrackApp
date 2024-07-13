import React, { useContext } from "react";
import { Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/trackContext"
import { ListItem } from "react-native-elements";
const TrackListScreen = ({ navigation }) => {
    const { state, fetchTrack } = useContext(TrackContext)
    return (
        <>
            <NavigationEvents onWillFocus={fetchTrack} />
            {/* <Text style={{ fontSize: 40 }}>TrackListScreen</Text> */}

        </>
    )
}

//belwo block is not working idealy
TrackListScreen.navigationOptions = {
    title: "Tracks"
}
const styles = StyleSheet.create({});

export default TrackListScreen;