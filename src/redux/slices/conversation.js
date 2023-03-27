import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
  },
  groupChat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversation(state, action) {
      // console.log(action, "actionssssssssssss");
      const list = action.payload.conversations.map((item) => {
        const this_user = item.participants.find(
          (element) => element._id.toString() !== user_id
        );
        const last_text_index = item.messages.length;
        const last_convo = item.messages[last_text_index - 1];
        const timestamp = new Date(last_convo.created_at).getTime();
        console.log(timestamp,"timestamp ")

        // Calculate the time elapsed since the timestamp
        const now = new Date().getTime();
        const elapsed = now - timestamp;
        console.log(elapsed,"elapsed ")

        // Determine the appropriate format based on the time elapsed
        let formattedTime;
        if (elapsed < 24 * 60 * 60 * 1000) {
          // Less than 24 hours: display the time only
          formattedTime = formatTime(timestamp);
          formattedTime = `${formattedTime}`;
        } else if (elapsed < 48 * 60 * 60 * 1000) {
          // Less than 48 hours: display "yesterday" and the time
          formattedTime = formatTime(timestamp);
          formattedTime = `Yesterday at ${formattedTime}`;
        } else if (elapsed < 7 * 24 * 60 * 60 * 1000) {
          // Less than a week: display the weekday and the time
          formattedTime = formatDate(timestamp);
          formattedTime = `${formattedTime} at ${formatTime(timestamp)}`;
        } else {
          // More than a week: display the date only
          formattedTime = formatDate(timestamp);
        }
        console.log(formattedTime,"formattedTime ")
        return {
          id: item._id,
          user_id: this_user._id,
          name: `${this_user.firstName} ${this_user.lastName}`,
          online: this_user.status === "Online",
          img: faker.image.avatar(),
          msg: last_convo.text,
          time: formattedTime,
          unread: 0,
          pinned: false,
        };
      });
      console.log(list, "listssssssssss");
      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {
      //
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (item) => {
          if (item.id !== this_conversation._id) {
            return item;
          } else {
            const user = this_conversation.participants.find(
              (item) => item._id.toString() !== user_id
            );
            const last_text_index = item.messages.length;
            const last_convo = item.messages[last_text_index - 1];
            const timestamp = new Date(last_convo.created_at).getTime();

            // Calculate the time elapsed since the timestamp
            const now = new Date().getTime();
            const elapsed = now - timestamp;

            // Determine the appropriate format based on the time elapsed
            let formattedTime;
            if (elapsed < 24 * 60 * 60 * 1000) {
              // Less than 24 hours: display the time only
              formattedTime = formatTime(timestamp);
              formattedTime = `${formattedTime}`;
            } else if (elapsed < 48 * 60 * 60 * 1000) {
              // Less than 48 hours: display "yesterday" and the time
              formattedTime = formatTime(timestamp);
              formattedTime = `Yesterday at ${formattedTime}`;
            } else if (elapsed < 7 * 24 * 60 * 60 * 1000) {
              // Less than a week: display the weekday and the time
              formattedTime = formatDate(timestamp);
              formattedTime = `${formattedTime} at ${formatTime(timestamp)}`;
            } else {
              // More than a week: display the date only
              formattedTime = formatDate(timestamp);
            }
            console.log(formattedTime,"formattedTime ")
            return {
              id: this_conversation._id,
              user_id: user._id,
              name: `${user.firstName}${user.lastName}`,
              online: user.status === "Online",
              img: faker.image.avatar(),
              msg: last_convo.text,
              time: formattedTime,
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (item) => item._id.toString() !== user_id
      );
      const last_text_index = this_conversation.messages.length;
      const last_convo = this_conversation.messages[last_text_index - 1];

      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user._id,
        name: `${user.firstName}${user.lastName}`,
        online: user.status === "Online",
        img: faker.image.avatar(),
        msg: last_convo.text,
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
    setCurrentConversation(state, action) {
      state.direct_chat.current_conversation = action.payload;
    },
    fetchCurrentMessages(state, action) {
      const messages = action.payload.messages;
      const formatted_messages = messages.map((item) => ({
        id: item._id,
        type: "msg",
        subtype: item.type,
        message: item.text,
        incoming: item.to === user_id,
        outgoing: item.from === user_id,
      }));
      state.direct_chat.current_messages = formatted_messages;
    },
    addDirectMessage(state, action) {
      state.direct_chat.current_messages.push(action.payload.message);
    },
  },
});

export default slice.reducer;

function formatTime(timestamp) {
  // Format the time as a string
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes < 10 ? "0" : ""}${minutes} ${amOrPm}`;
}

function formatDate(timestamp) {
  // Format the date as a string
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  return `${day} ${month}`;
}

export const FetchDirectConversations = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchDirectConversation({ conversations }));
  };
};

export const AddDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectConversation({ conversation }));
  };
};

export const UpdateDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateDirectConversation({ conversation }));
  };
};
export const SetCurrentConversation = (current_conversation) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.setCurrentConversation(current_conversation));
  };
};

export const FetchCurrentMessages = ({ messages }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchCurrentMessages({ messages }));
  };
};

export const AddDirectMessage = (message) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectMessage({ message }));
  };
};
