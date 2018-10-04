import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../reducers/rootReducers";

const middlewares = [thunkMiddleware];

if (__DEV__) {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));