import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import FetchChannels from "./reducer-fetch-channels";
import FetchUsers from "./reducer-fetch-users";
import LogoutUser from "./reducer-logout";
import SendMessage from "./reducer-send-message";
import FetchChannelMessages from "./reducer-fetch-channel-messages";

const rootReducer = combineReducers({
  loggedInUser: UserReducer,
  availableChannels: FetchChannels,
  onlineUsers: FetchUsers,
  logoutUserStatus: LogoutUser,
  sentMessage: SendMessage,
  channelMessages: FetchChannelMessages
});

export default rootReducer;
