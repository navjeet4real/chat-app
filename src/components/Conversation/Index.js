import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";


const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} width="auto" maxHeight={"100vh"}>
      <Header />
      <Box sx={{ flexGrow: 1,height:"100%", overflowY:"scroll" }}>
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
