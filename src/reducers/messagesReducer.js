import { initialState } from "./../data/initialState";
import { constants as C } from "./../utils/constants";

export default function messagesReducer(state= initialState, action) {
    switch(action.type) {
        case C.ADD_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    action.payload
                ]
            }
        default:
            return state;
    }
}