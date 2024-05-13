import React from "react";
import { Text, StyleSheet, Button } from "react-native";
const SignupScreen = ({ navigation }) => {

    return (
        <>
            <Text style={{ fontSize: 40 }}>SignupScreen</Text>
            <Button
                title="Go to sigin"
                onPress={() =>navigation.navigate("Signin")}
            />
            <Button
                title="Go to MainScreen"
                onPress={() =>navigation.navigate("mainFlow")}
            />
        </>
    )
}

const styles = StyleSheet.create({});

export default SignupScreen;