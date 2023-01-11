import { useTheme } from "@emotion/react";
import { Stack, Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import Conversation from "../../components/Conversation/Index";
import Chats from "./Chats";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app)
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
          }}
        >
          <Conversation />
        </Box>
        {sidebar.open && <Contact />}
      </Stack>
    </>
  );
};

export default GeneralApp;
