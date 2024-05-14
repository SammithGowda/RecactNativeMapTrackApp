import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../component/spacer";
const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        < View style={styles.container}>
            <Spacer>
                <Text style={styles.heading}>Signup Screen</Text>
            </Spacer>
            <Input
                onChange={setEmail}
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
            />
            <Spacer />
            <Input
                secureTextEntry
                onChange={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                label="Password"
            />
            <Button
                title="Sign Up"
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
    }
});

export default SignupScreen;