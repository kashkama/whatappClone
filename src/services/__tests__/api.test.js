import "react-native";
import React from "react";
import {getMockData} from "./../api";

it("returns an array with data", async () => {
    const messages = await getMockData();
    expect(messages).toMatchSnapshot();
});