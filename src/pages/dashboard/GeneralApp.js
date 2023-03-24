import React from "react";
import { useTheme } from "@emotion/react";
import { Stack, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import Conversation from "../../components/Conversation/Index";
import SharedMessages from "../../components/SharedMessages";
import StaredMessage from "../../components/StaredMessage";
import Chats from "./Chats";
import NoChatSVG from "../../assets/Illustration/NoChat";
import { Link, useSearchParams } from "react-router-dom";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();


  const theme = useTheme();
  const { sidebar, room_id, chat_type } = useSelector((store) => store.app);
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.default,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
                searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          {room_id !== null && chat_type === "individual" ? (
            <Conversation />
          ) : (
            <>
              <Stack
                spacing={2}
                sx={{ height: "100%", width: "100%" }}
                alignItems="center"
                justifyContent={"center"}
              >
                <NoChatSVG />
                <Typography variant="subtitle2">
                  Select a conversation or start a{" "}
                  <Link
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  new one
                </Link>
                </Typography>
              </Stack>
            </>
          )}
        </Box>
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <Contact />;
              case "STARRED":
                return <StaredMessage />;
              case "SHARED":
                return <SharedMessages />;
              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
