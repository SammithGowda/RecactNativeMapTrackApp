import createDataContext from "./createDataContext";

//create reducer

const authReducer = (state, { type, payload }) => {

    switch (type) {

        default:
            return state
    }

}

export const { Context, Provider } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
)