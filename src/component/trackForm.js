import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements"
import Spacer from "./spacer";
import { Context as locationContext } from "../context/locationContext"
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm = () => {
    const { state: { name, location, recording },
        startRecording,
        stopRecording,
        changeName
    } = useContext(locationContext)
    const [saveTrack] = useSaveTrack()
    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
            </Spacer>
            <Spacer>
                {recording ? <Button title="Stop" onPress={stopRecording} />
                    : <Button title="Start Recording" onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {!recording && location.length ? <Button title="Save Recording" onPress={saveTrack} /> : null}
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({});

export default TrackForm;