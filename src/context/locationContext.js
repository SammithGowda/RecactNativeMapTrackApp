import createDataContext from "./createDataContext"

const locationReducer = (state, { type, payload }) => {
    switch (type) {
        case "current_location":
            return { ...state, currentLocation: payload };
        case "start_recording":
            return { ...state, recording: true };
        case "stop_recording":
            return { ...state, recording: false };
        case "add_location":
            return { ...state, location: [...state.location, payload] }
        case "change_name":
            return { ...state, name: payload };
        case "reset":
            return { ...state, name: "", location: [] }
        default:
            return state;
    }
}

const changeName = dispacth => (name) => {
    dispacth({ type: "change_name", payload: name })
}

const startRecording = dispacth => () => {
    dispacth({ type: "start_recording" })
};

const stopRecording = dispacth => () => {
    dispacth({ type: "stop_recording" })

};

const resetState = dispacth => () => {
    dispacth({ type: "reset" })
}

const addLocation = dispacth => (location, recording) => {
    dispacth({ type: "current_location", payload: location })

    if (recording) {
        dispacth({ type: "add_location", payload: location })
    }

}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, resetState },
    { recording: false, location: [], currentLocation: null, name: '' },
)