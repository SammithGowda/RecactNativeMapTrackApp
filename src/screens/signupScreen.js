import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Spacer from "../component/spacer";
import { Context as authContext } from "../context/authContext";
import AuthForm from "../component/authForm";
import NavLink from "../component/navLink";
import { NavigationEvents } from "react-navigation";
const SignupScreen = ({ navigation }) => {

    const { state, signUp, clearErrorMsg,localSignin } = useContext(authContext)
    useEffect(() => {
        localSignin()
    }, [])
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMsg}
            />
            <AuthForm
                headerText={"Sign Up for Tracker"}
                errorMessage={state.errorMessage}
                onSubmit={signUp}
                buttonText={"Singup"}
            />
            <NavLink text={"Already have account? Sign In instead"} Routename={"Signin"} />
            <Spacer />

        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 30
    },

});

export default SignupScreen;