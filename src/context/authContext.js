import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
//create reducer

const authReducer = (state, { type, payload }) => {

    switch (type) {

        default:
            return state
    }

}

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        // signup make api for server
        //get authenticate with server 
        //get tokena and update state
        //if error show error
        console.log(email,password)
        try {
            const response = await trackerApi.post('/signup');
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
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
    { isSignedIn: false }
)