import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../component/spacer";
import { Context as AuthContext } from "../context/authContext";
import { SafeAreaView } from "react-navigation";
const AccountScreen = () => {
    const { signOut } = useContext(AuthContext)
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
            <Text style={{ fontSize: 40 }}>Account Screen</Text>
            <Spacer>
                <Button
                    title={"Signout"}
                    onPress={signOut}
                />
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default AccountScreen;