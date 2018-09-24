import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Animated, Easing } from "react-native";

class Extrapolation extends React.Component {
    state = {
        items: 5,
        animatedValue: new Animated.Value(0)
    }

    componentDidMount() {
        const { timing } = Animated;
        const { animatedValue } = this.state;
        timing(
            animatedValue, { toValue: 1}
        ).start();
    }

    get items() {
        const slideAnim = this.state.animatedValue.interpolate({
            inputRange: [0, .5],
            outputRange: [0, 50],
            extrapolate: "clamp"
        });

        return Array(this.state.items)
        .fill(1)
        .map((item, index) => {
            switch (index) {
                case 1:
                // return Animated.View for relevant circle with index 1
                    return (
                        <Animated.View
                            style={[styles.item, 
                                    { height: slideAnim}
                            ]} key = { index } >
                            <Text style={styles.itemText}>{index}</Text>
                        </Animated.View >
                    );
                case 2:
                // return Animated.View for relevant circle with index 2
                    return (
                        <Animated.View
                            style={[styles.item,  
                                { height: slideAnim}
                            ]} key={index} >
                            <Text style={styles.itemText}>{index}</Text>
                        </Animated.View >
                    );
                case 3:
                // return Animated.View for relevant circle with index 3
                    return (
                        <Animated.View
                            style={[styles.item,  { height: slideAnim}
                            ]} key={index} >
                            <Text style={styles.itemText}>{index}</Text>
                        </Animated.View >
                    );
                case 4:
                // return Animated.View for relevant circle with index 4
                    return (
                        <Animated.View
                            style={[styles.item,  { height: slideAnim}
                            ]} key={index} >
                            <Text style={styles.itemText}>{index}</Text>
                        </Animated.View >
                    );
                default:
                    return (
                        <Animated.View
                            style={[styles.item, 
                                { height: slideAnim}
                            ]} key={index}>
                            <Text style={styles.itemText}>{index}</Text>
                        </Animated.View>
                    );
            }
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.area}>
                    {this.items}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        width: 50,
        height: 50,
        backgroundColor: "gray",
        borderRadius: 25,
        borderWidth: 0,
        margin: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    itemText: {
        backgroundColor: "transparent",
        color: "white"
    },
    area: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    }
})


export default Extrapolation;