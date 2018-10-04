import { connect } from "react-redux";
import ChatScreen from "./screens/chatScreen";
import { postMessageToserver, subscribeToGetMessagesFromServer, unsubscribeToGetMessagesFromServer} from "./actions/actions"

export const ChatScrn = connect(
	(state) => ({
		messages: state.messages
	}),
	({
		postMessageToserver, subscribeToGetMessagesFromServer, unsubscribeToGetMessagesFromServer
	})
)(ChatScreen);