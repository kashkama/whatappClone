import React from 'react';
import { createStackNavigator } from "react-navigation";
import { routes } from "./config/routes";
import AnimationPlayground from "./components/presentational/layoutAnimation";

const RootStack =  createStackNavigator(routes, {
	initialRouteName: "Home"
});

export default class App extends React.Component {
	render() {
		return (
			<AnimationPlayground/>
		)
	}
}
