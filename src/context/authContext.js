import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStroage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRoute";
//create reducer

const authReducer = (state, { type, payload }) => {

    switch (type) {
        case "add_error":
            return { ...state, errorMessage: payload };
        case "signin":
            return { errorMessage: '', token: payload }
        case "clear_msg":
            return { ...state, errorMessage: '' }
        default:
            return state;
    }

}

const localSignin = (dispatch) => async () => {
    const token = await AsyncStroage.getItem('token')
    if (token) {
        navigate("TrackList")
    } else {
        navigate("Signup")
    }
}

const clearErrorMsg = (dispatch) => () => {
    dispatch({ type: "clear_msg" })
}


const signUp = (dispatch) => async ({ email, password }) => {
    // signup make api for server
    //get authenticate with server 
    //get tokena and update state
    //if error show error
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStroage.setItem('token', JSON.stringify(response.data.token))
        dispatch({ type: 'signin', payload: response.data })
        navigate("TrackList");

    } catch (error) {
        dispatch({ type: "add_error", payload: "Opps Something went wrong Please check email and password !" })

    }
}

const signIn = (dispatch) => async ({ email, password }) => {
    // sigIn make api for server
    //get authenticate with server 
    //get tokena and update state
    //if error show error
    try {
        //dispatch success 
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStroage.setItem('token', JSON.stringify(response.data.token));
        dispatch({ type: "sigin", payload: response.data.token });
        navigate("TrackList");

    } catch (error) {
        //dispatch error
        dispatch({ type: 'add_error', payload: "Opps Something went wrong Please check email and password !" })
    }
}



const signOut = (dispatch) => {
    return ({ email, password }) => {
        //update state
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signUp, signIn, signOut, clearErrorMsg, localSignin },
    { token: null, errorMessage: '' }
)