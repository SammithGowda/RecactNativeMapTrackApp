import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"

const trackReducer = (state, { type, payload }) => {
    switch (type) {
        case "fetch_response":
            return payload
        default:
            return state;
    }
}

const fetchTrack = dispatch => async () => {

    const response = await trackerApi.get("/tracks")
    console.log(response, "from fetch api")
    dispatch({ type: "fetch_response", payload: response.data })
};
const createTrack = dispatch => async (name, location) => {
    console.log(` in context api to make api call ${name}, ${location.length}`)
    await trackerApi.post('/track', { name, location });

};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTrack, createTrack },
    []
)