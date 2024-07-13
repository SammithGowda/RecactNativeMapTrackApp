import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../component/spacer";
import { Context as AuthContext } from "../context/authContext";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
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

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon:<Feather name="settings" size={20} color={'black'}/>
}
const styles = StyleSheet.create({});

export default AccountScreen;