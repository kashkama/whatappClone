import { initialState } from "./../data/initialState";
import { constants as C } from "./../utils/constants";

export default function messagesReducer(state= initialState, action) {
    switch(action.type) {
        case C.UPDATE_MESSAGES:
            return action.payload
        case C.UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE:
            return {
                messages: state.messages
            }
        default:
            return state;
    }
}
