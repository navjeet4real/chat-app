import { useTheme } from "@emotion/react";
import { Stack, Box } from "@mui/system";
import React from "react";
import Contact from "../../components/Contact";
import Conversation from "../../components/Conversation/Index";
import Chats from "./Chats";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 740px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>
        <Contact />
      </Stack>
    </>
  );
};

export default GeneralApp;
