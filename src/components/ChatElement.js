import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";
import StyledBadge from "./StyledBadge";

const ChatElement = ({ id, name, img, msg, time, online, unread }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
  return (
    <Box
    onClick ={() => {
      dispatch(SelectConversation({room_id: id}))
    }}
      sx={{
        width: "100%",
        // height: 60,
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement