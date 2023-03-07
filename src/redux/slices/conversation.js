import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const user_id = window.localStorage.getItem("user_id")
const initialState = {
    direct_chat: {
        conversations: [],
        current_conversation: null,
        current_messages: null,
    },
    groupChat: {

    },
}

const slice = createSlice({
    name: "conversation",
    initialState,
    reducers: {
        fetchDirectConversation(state, action){
            const list = action.payload.conversations.map((item) => {
                const this_user = item.participants.find((element) => element._id.toString() !== user_id)
                return {
                    id: item._id,
                    user_id: this_user._id,
                    name: `${this_user.firstName}${this_user.lastName}`,
                    online: this_user.status === "Online",
                    img: faker.image.avatar(),
                    msg: faker.music.songName(),
                    time: "9:36",
                    unread: 0,
                    pinned: false
                }
            })
            state.direct_chat.conversations = list
        }
    }
})

export default slice.reducer;

export const FetchDirectConversations = ({conversations}) => {
    return async (dispatch, getState) => {
        dispatch(slice.actions.fetchDirectConversation({conversations}))
    }
} 