import { Stack, Box } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case "divider":
              return <Timeline item={item} /> 
              
            case "msg":
              switch (item.subtype) {
                case "img":
                  break;
                case "doc":
                  break;
                case "link":
                  break;
                case "reply":
                  break;
                default:
                  break;
              }
              break;
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
