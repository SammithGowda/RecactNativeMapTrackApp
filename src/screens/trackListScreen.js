import React from "react";
import { Text, StyleSheet, Button } from "react-native";
const TrackListScreen = ({ navigation }) => {

    return (
        <>
            <Text style={{ fontSize: 40 }}>TrackListScreen</Text>
            <Button
                title="Go to TrackDetails"
                onPress={() =>navigation.navigate("TrackDetails")}
            />
        </>
    )
}

const styles = StyleSheet.create({});

export default TrackListScreen;