import { Stack, Box } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case "divider":
              return <Timeline item={item} />;

            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMsg item={item} />;
                case "doc":
                  return <DocMsg item={item} />;
                case "link":
                  return <LinkMsg item={item} />;
                case "reply":
                  return <ReplyMsg item={item} />;
                default:
                  return <TextMsg item={item} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
