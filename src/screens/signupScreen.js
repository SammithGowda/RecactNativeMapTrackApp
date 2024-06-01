import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../component/spacer";
import { Context as authContext } from "../context/authContext";
const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signUp } = useContext(authContext)
    return (
        < View style={styles.container}>
            <Spacer>
                <Text style={styles.heading}>Signup Screen</Text>
            </Spacer>
            <Input
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
            />
            <Spacer />
            <Input
                secureTextEntry
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                label="Password"
            />
            <Text style={styles.errorStyle}>{state.errorMessage ? state.errorMessage : ""}</Text>
            <Button
                title="Sign Up"
                onPress={() => signUp({ email, password })}
            />
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
    heading: {
        fontSize: 25,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 30
    },
    errorStyle: {
        color: "red",
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 10
    }
});

export default SignupScreen;