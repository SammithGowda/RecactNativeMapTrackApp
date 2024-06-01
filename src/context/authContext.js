import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStroage from '@react-native-async-storage/async-storage';
//create reducer

const authReducer = (state, { type, payload }) => {

    switch (type) {
        case "add_error":
            return { ...state, errorMessage: payload };
        case "singup":
            return { errorMessage: '', token: payload }
        default:
            return state
    }

}


const signUp = (dispatch) => async ({ email, password }) => {
    // signup make api for server
    //get authenticate with server 
    //get tokena and update state
    //if error show error
    try {
        const response = await trackerApi.post('/signup', { email, password });

        dispatch({ type: 'singup', payload: response.data })

    } catch (error) {

        dispatch({ type: "add_error", payload: "Opps email already extist !" })

    }
}

const signIn = (dispatch) => {
    return ({ email, password }) => {
        // sigIn make api for server
        //get authenticate with server 
        //get tokena and update state
        //if error show error
    }
}


const signOut = (dispatch) => {
    return ({ email, password }) => {
        //update state
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signUp, signIn, signOut },
    { token: null, errorMessage: '' }
)