import { Stack, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";
import {
  FetchCurrentMessages,
  SetCurrentConversation,
} from "../../redux/slices/conversation";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";

const Message = ({ isMobile, menu }) => {
  const dispatch = useDispatch();

  const { conversations, current_messages } = useSelector(
    (state) => state.conversation.direct_chat
  );
  const { room_id } = useSelector((state) => state.app);

  useEffect(() => {
    const current = conversations.find((item) => item.id === room_id);

    socket.emit("get_messages", { conversation_id: current.id }, (data) => {
      // data => list of messages
      console.log(data, "List of messages");
      dispatch(FetchCurrentMessages({ messages: data }));
    });

    dispatch(SetCurrentConversation(current));
  }, []);

  return (
    <Box p={isMobile ? 1 : 3}>
      <Stack spacing={3}>
        {current_messages.map((item) => {
          switch (item.type) {
            case "divider":
              return <Timeline key={item.id} item={item} />;

            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMsg key={item.id} item={item} menu={menu} />;
                case "doc":
                  return <DocMsg key={item.id} item={item} menu={menu} />;
                case "link":
                  return <LinkMsg key={item.id} item={item} menu={menu} />;
                case "reply":
                  return <ReplyMsg key={item.id} item={item} menu={menu} />;
              }
            default:
              return <>
                <TextMsg key={item.id} item={item} menu={menu} />
              </>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
