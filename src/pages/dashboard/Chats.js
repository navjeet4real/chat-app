import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CircleDashed } from "phosphor-react";
import React from "react";

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#F8FAFF",
      }}
    >
      <Stack p={3}>
        <Stack
          justifyContent={"space-between"}
          alignItems="center"
          spacing={3}
          direction={"row"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
