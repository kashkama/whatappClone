import React from "react";
import {View, Text, StyleSheet, Button, FlatList, ImageBackground } from "react-native";
import Compose from "./../components/presentational/compose";
import Message from "./../components/presentational/message";

class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    componentDidMount() {
        this.props.subscribeToGetMessagesFromServer();
    }

    componentWillUnmount() {
        this.props.unsubscribeToGetMessagesFromServer();
    }

    render() {
        console.log(this.props);
        return(
            <ImageBackground 
                style={[styles.container, styles.backgroundImage]}
                source={require("./../assets/images/background.png")}
            >
                <FlatList
                    style={styles.container}
                    data={this.props.messages}
                    keyExtractor={(item, index) => (`message-${index}`)}
                    renderItem={Message}
                />
                <Compose submit={this.props.postMessageToserver}/>
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