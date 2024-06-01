import React from "react";
import { Text, StyleSheet,TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
const NavLink = ({ navigation, text, Routename }) => {

    return <>
        <TouchableOpacity onPress={() => navigation.navigate(Routename)}>
            <Text style={styles.Link}>{text}</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    Link: {
        color: "blue",
        marginLeft: 10,
    }
})

export default withNavigation(NavLink)
