import { useTheme } from "@emotion/react";
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";
const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 0px rbga(0,0,0, 2.5)",
            with: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {`+91 89681 18009`}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline" fontWeight={500}>
                Voice
              </Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline" fontWeight={500}>
                Video
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="body2">About</Typography>
            <Typography variant="article">Hi, there I'm using</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack>
              <Typography variant="subtitle2">Media, links and docs</Typography>
            </Stack>
            <Button endIcon={<CaretRight />}>201</Button>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            {[1, 2, 3].map((item) => (
              <Box>
                <img src={faker.image.image()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star />
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
            <IconButton>
              <CaretRight size={20} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell />
              <Typography variant="subtitle2">Mute Notification</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar scr={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Wojtek</Typography>
              <Typography variant="caption">Shouvik, Jayant and You</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Button fullWidth variant="outlined" startIcon={<Prohibit />}>
              Block
            </Button>
            <Button fullWidth variant="outlined" outlined startIcon={<Trash />}>
              Delete
            </Button>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
