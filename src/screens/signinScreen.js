import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../component/authForm";
import NavLink from "../component/navLink";
import { Context } from "../context/authContext";
import Spacer from "../component/spacer";
import { NavigationEvents } from "react-navigation";
const SigninScreen = () => {
    const { state, signIn, clearErrorMsg } = useContext(Context);
    
    return (
        <View style={styles.Container}>
            <NavigationEvents
                onWillFocus={clearErrorMsg}
            />
            <AuthForm
                headerText={"Sign In for Account"}
                errorMessage={state.errorMessage}
                onSubmit={signIn}
                buttonText={"Singin"}
            />
            <NavLink
                text={"Don't have account? Sign Up instead"} Routename={"Signup"}
            />
            <Spacer />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 30
    }
});

export default SigninScreen;