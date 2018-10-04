
import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { store } from "./store/storeFactory";
import { routes } from "./config/routes";
import { initApi } from "./services/api";

const RootStack =  createStackNavigator(routes, {
	initialRouteName: "Home"
});

export default class App extends React.Component {
    componentWillMount() {
        initApi();
    }
    
	render() {
		return (
            <Provider store={store}>
			    <RootStack/>
            </Provider>
		)
	}
}
