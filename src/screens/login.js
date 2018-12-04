import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

class Login extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        width: '100%'
    }
});

export default Login;