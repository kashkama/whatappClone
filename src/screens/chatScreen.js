import React from "react";
import {View, Text, StyleSheet, Button, FlatList, ImageBackground } from "react-native";
import { getMockData } from "./../services/api";

class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.getMessageRow = this.getMessageRow.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    componentDidMount() {
        getMockData().then((messages) => {
            this.setState({
                messages
            })
        })
    }

    getMessageRow(item) {
        return (
            <View
                style={[
                    styles.listItem, item.incoming ?
                        styles.incomingMessage:
                        styles.outgoingMessage
                ]}
            >
                <Text style={styles.textColor}>{item.message}</Text>
            </View>
        )
    }

    render() {
        const {messages} = this.state;
        return(
            <ImageBackground 
                style={styles.container}
                source={require("./../assets/images/background.png")}
            >
                <FlatList
                    data={messages}
                    keyExtractor={(item, index) => (`message-${index}`)}
                    renderItem={({ item }) =>
                        this.getMessageRow(item)
                    }
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        width: "100%"
    },
    listItem: {
        width: "70%",
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderColor: "#979797",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10
    },
    textColor: {
        color: "black",
        fontWeight: "bold"
    },
    incomingMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#E1FFC7"
    },
    outgoingMessage: {
        alignSelf: "flex-end"
    }
});

export default ChatScreen;