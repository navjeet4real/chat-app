import { useTheme } from "@emotion/react";
import { Stack, Box } from "@mui/system";
import React from "react";
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
            width: "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
