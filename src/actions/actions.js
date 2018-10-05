import { constants as C } from "./../utils/constants";
import { getMessages, postMessage } from "./../services/api";

export const postMessageToserver = (message) => (dispatch) => {
    dispatch({
        type: C.POST_MESSAGE,
        payload: {
            message,
            incoming: false
        }
    })
    postMessage(message)
        .then(() => {
            dispatch({
                type: C.POST_MESSAGE_SUCCESS
            })
        })
        .catch((error) => {
            dispatch({
                type: C.POST_MESSAGE_ERROR,
                error
            })
        })
}

export const subscribeToGetMessagesFromServer = () => (dispatch) => {
    dispatch({
        type: C.SUBSCRIBE_GET_MESSAGES_TO_FIREBASE
    })
    const unsubscribeFn = getMessages((snapshot) => {
        dispatch({
            type: C.UPDATE_MESSAGES,
            payload: {
                messages: Object.values(snapshot.val()),
                unsubscribeFn
            }
        })
    })
}

export const unsubscribeToGetMessagesFromServer = () => (dispatch, getState) => {
    (dispatch, getState) => {
        if(getState().unsubscribeFn) {
            getState.unsubscribeFn();
            dispatch({
                type: C.UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE
            })
        }
    }
}