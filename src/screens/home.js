import React from "react";
import { View, Button, StyleSheet } from "react-native";

class Home extends React.Component {
    static navigationOptions = {
        title: "Home Screen"
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Button
                        onPress={() => this.props.navigation.navigate("Chat", {name: "john"})}
                        title="john"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Home;