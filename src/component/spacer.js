import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {

    return (
        <>
            <View style={styles.Margin}>{children}</View>
        </>
    )

}

const styles = StyleSheet.create({
    Margin: {
        margin: 15
    }
})

export default Spacer