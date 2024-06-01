import React, { useReducer } from "react";


export default (reducer, action, initialState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundsAction = {};

        for (let key in action) {
            boundsAction[key] = action[key](dispatch);
        }
        console.log(boundsAction,"boundsAction")
        return (
            <Context.Provider value={{ state, ...boundsAction }}>
                {children}
            </Context.Provider >
        )
    }
    return { Context, Provider }
}