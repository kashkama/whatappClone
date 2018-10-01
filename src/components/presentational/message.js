import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({item}) => (
    <View 
        style={[
            styles.message, 
            item.incoming && styles.incomingMessage || styles.outgoingMessage
        ]}
    >
        <Text>{item.message}</Text>
    </View>
);

const styles = StyleSheet.create({
    message: {
        width: "70%",
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderColor: "#979797",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#E1FFC7"
    },
    outgoingMessage: {
        alignSelf: "flex-end",
        backgroundColor: "white"
    }
})

export default Message;