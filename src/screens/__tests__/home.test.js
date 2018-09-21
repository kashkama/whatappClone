import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./../home";

configure({ adapter: new Adapter()})

it("renders home component correctly", () => {
    const tree = renderer.create(
        <Home/>
    );
    expect(tree).toMatchSnapshot();
});

it("has proper navigation options", () => {
    expect(Home.navigationOptions).toMatchSnapshot();
})

it("navigate on press", () => {
    const navigate = jest.fn();
    const homeScreen = shallow(
        <Home navigation={{ navigate }}/>
    );
    homeScreen.find("Button").simulate("press");
    expect(navigate).toBeCalledWith("Chat", {name: "john"})
})