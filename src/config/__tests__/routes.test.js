import React from "react";
import {routes} from "./../routes";
import Home from "./../../screens/home";
import ChatScreen from "./../../screens/chatScreen";

it("has all needed routes", () => {
    expect(routes).toMatchSnapshot();
})

it("has home screen", () => {
    expect(routes.Home.screen).toBe(Home);
})

it("has chart screen", () => {
    expect(routes.Chat.screen).toBe(ChatScreen);
})