import createDataContext from "./createDataContext"

const locationReducer = (state, { type, payload }) => {
    switch (type) {
        case "current_location":
            return { ...state, currentLocation: payload };
        default:
            return state;
    }
}

const startRecording = dispacth = () => { };

const stopRecording = dispacth = () => { };

const addLocation = (dispacth) => {
    return (location) => {
        dispacth({ type: "current_location", payload: location })
    }
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, location: [], currentLocation: null },
)