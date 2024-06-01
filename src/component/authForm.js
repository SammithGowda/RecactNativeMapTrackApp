import React, { useState } from "react"
import { Text, StyleSheet, View } from "react-native"
import Spacer from "./spacer";
import { Button, Input } from "react-native-elements";
const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <>
        <Spacer>
            <Text style={styles.heading}>{headerText}</Text>
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
        <Text style={styles.errorStyle}>{errorMessage ? errorMessage : null}</Text>
        <Button
            title={buttonText}
            onPress={() => onSubmit({ email, password })}
        />
        <Spacer />
    </>
}

const styles = StyleSheet.create({
    errorStyle: {
        color: "red",
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 10
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold"
    },
})

export default AuthForm