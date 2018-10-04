import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducers";

const middlewares = [thunk];

if (__DEV__) {
    middlewares.push(logger);
}

export const storeFactory = createStore(rootReducer, applyMiddleware(...middlewares));