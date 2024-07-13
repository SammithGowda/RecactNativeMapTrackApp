import { useContext } from "react";
import { Context as locationContext } from "../context/locationContext";
import { Context as trackContext } from "../context/trackContext";
import { navigate } from "../navigationRoute";
export default () => {
    // context value like loc name 
    //save by calling context method
    const { state: { name, location }, resetState } = useContext(locationContext);
    const { createTrack } = useContext(trackContext)

    const saveTrack = () => {
        console.log(`Clicked save track in default function ${name} ${location}`)
        createTrack(name, location);
        resetState()
        navigate("TrackList")
    }

    return [saveTrack]
}