import React from 'react';
import { View, Text, Alert, Button, ToastAndroid, Vibration, NetInfo } from "react-native";

export default class App extends React.Component {

    componentDidMount() {
        NetInfo.isConnected.fetch().then(isConnected => {
            isConnected ?  
                ToastAndroid.show("Online", ToastAndroid.SHORT):
                    ToastAndroid.show("Offline", ToastAndroid.SHORT)
        })
    }

    alert() {
        Alert.alert(
            "Here goes Alert title",
            "My first Api test in ApiPlayground",
            [
                {
                    text: "Continue",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"), style: "cancel"
                },
                {
                    text: "Exit",
                    onPress: () => Alert.alert("Are you sure?", "", [
                        { text: "Ok"},
                        { text: "Cancel", style: "cancel"}
                    ]),
                    style: "destructive"
                }
            ],
            { cancelable: true}
        )
    }

    toast() {
        ToastAndroid.show("Toast Message for Android", ToastAndroid.SHORT)
    }

    vibration() {
        Vibration.vibrate([0, 500, 100, 200]);
        Vibration.cancel();
    }

	render() {
		return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{marginTop: 10, fontWeight: "bold"}}>Alert Api</Text>
                <Button title="on alert" onPress={this.alert}/>
                <Text style={{marginTop: 10, fontWeight: "bold"}}>Toast Api</Text>
                <Button title="show toast" onPress={this.toast}/>
                <Text style={{marginTop: 10, fontWeight: "bold"}}>Vibration Api</Text>
                <Button title="vibration" onPress={this.vibration}/>
            </View>
		)
	}
}
