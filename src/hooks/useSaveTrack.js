import { useContext } from "react";
import { Context as locationContext } from "../context/locationContext";
import { Context as trackContext } from "../context/trackContext";

export default () => {
    // context value like loc name 
    //save by calling context method
    const { state: { name, location } } = useContext(locationContext);
    const { createTrack } = useContext(trackContext)

    const saveTrack = () => {
        createTrack(name, location)
    }

    return [saveTrack]
}