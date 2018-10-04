import { constants as C } from "./../utils/constants";

export function addMessage(message) {
    return {
        type: C.ADD_MESSAGE,
        payload: {
            message,
            incoming: false
        }
    }
}