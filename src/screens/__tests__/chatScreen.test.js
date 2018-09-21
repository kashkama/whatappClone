import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { getMockDataSpy } from "./../../services/api";
import ChatScreen from "./../chatScreen";

configure({ adapter: new Adapter()});
jest.mock("../../services/api");

it("renders ChatScreen component correctly", () => {
    expect(ChatScreen).toMatchSnapshot();
})

it("ChatScreen has proper navigation options", () => {
    expect(ChatScreen.navigationOptions({
        navigation: {
            state: {
                params: {
                    name: "john"
                }
            }
        }
    })).toMatchSnapshot();
})

// it("navigate to home on press", () => {
//     const goBack = jest.fn();
//     const chatScreen = shallow(
//         <ChatScreen navigation={{ goBack }}/>
//     )
//     chatScreen.find("Button").simulate("press");
//     expect(goBack).toBeCalledWith();
// });

it("fetches data when component is rendered", () => {
    const chatScreen = renderer.create(
        <ChatScreen/>
    );
    expect(getMockDataSpy).toBeCalled();
});