import React, { useEffect, useRef } from "react";
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import { SimpleBarStyle } from "../../components/Scrollbar";
import useResponsive from "../../hooks/useResponsive";
import { useDispatch, useSelector } from "react-redux";


const Conversation = () => {
  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();

  const messageListRef = useRef(null);

  const { current_messages } = useSelector(
    (state) => state.conversation.direct_chat
  );

  useEffect(() => {
    // Scroll to the bottom of the message list when new messages are added
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [current_messages]);
  return (
    <Stack height={"100%"} width={isMobile ? "100vw" : "auto"} maxHeight={"100vh"}>
      <Header />
      <Box ref={messageListRef}
        sx={{
          flexGrow: 1, height: "100%", overflowY: "scroll",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}>
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Message menu={true} isMobile={isMobile} />
        </SimpleBarStyle>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
