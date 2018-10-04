import { connect } from "react-redux";
import ChatScreen from "./screens/chatScreen";
import { postMessageToserver, subscribeToGetMessagesFromServer, unsubscribeToGetMessagesFromServer} from "./actions/actions"

export const ChatScrn = connect(
	({messages}) => ({
		messages: messages
	}),
	({
		postMessageToserver, subscribeToGetMessagesFromServer, unsubscribeToGetMessagesFromServer
	})
)(ChatScreen);