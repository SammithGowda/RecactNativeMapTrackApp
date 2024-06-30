import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements"
import Spacer from "./spacer";
import { Context as locationContext } from "../context/locationContext"
const TrackForm = () => {
    const { state: { name, location, recording },
        startRecording,
        stopRecording,
        changeName
    } = useContext(locationContext)

    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
            </Spacer>
            {recording ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }
        </>
    )
}

const styles = StyleSheet.create({});

export default TrackForm;