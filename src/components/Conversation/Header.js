import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import {
  CaretDown,
  MagnifyingGlass,
  Phone,
  VideoCamera,
} from "phosphor-react";
import React from "react";
import { dispatch } from "../../redux/store";
import StyledBadge from "../StyledBadge";
import { ToggleSidebar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "Light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
      }}
      p={2}
    >
      <Stack
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
        alignItems="center"
        direction={"row"}
      >
        <Stack onClick={() => {
          dispatch(ToggleSidebar())
        }} direction={"row"} spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography>{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3} alignItems="center">
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem={true} />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
