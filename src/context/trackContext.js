import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"

const trackReducer = (state, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}

const fetchTrack = dispatch => () => {
};
const createTrack = dispatch => (name, location) => {
    console.log(name, location.length)

};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTrack, createTrack },
    []
)