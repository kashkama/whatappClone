import React from 'react';
import { createStackNavigator } from "react-navigation";
import { routes } from "./config/routes";
import AnimationPlayground from "./components/presentational/layoutAnimation";
import AnimatedCircles from "./components/presentational/animationCircles";
import AnimatedValue from "./components/presentational/animated";
import Interpolation from "./components/presentational/interpolation";
import Extrapolation from "./components/presentational/extrapolate";
import ComplexAnimation from "./components/presentational/complexAnimation";

const RootStack =  createStackNavigator(routes, {
	initialRouteName: "Home"
});

export default class App extends React.Component {
	render() {
		return (
			<ComplexAnimation/>
		)
	}
}
