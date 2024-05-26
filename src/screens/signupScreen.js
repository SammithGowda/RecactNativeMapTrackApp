import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../component/spacer";
import { Context as authContext } from "../context/authContext";
const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signUp } = useContext(authContext)
    const localFun = ()=>{
    }
    console.log("email,password",email)
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
                onPress={() => signUp({email:email,password:password})}
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