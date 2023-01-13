import React from "react";
import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Avatar, Divider, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";

const Settings = () => {
  const theme = useTheme();

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      //   onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      //   onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* left panel */}
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rbga(0,0,0,0.25)",
        }}
      >
        <Stack px={4} spacing={4} pt={4}>
          <Stack
            spacing={3}
            direction={"row"}
            justifyContent="left"
            alignItems={"center"}
          >
            <IconButton>
              <CaretLeft size={24} color={"#4B4B4B"} />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          <Stack direction={"row"} spacing={3} justifyContent="left">
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
              sx={{ height: "56px", width: "56px" }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article">{faker.name.fullName()}</Typography>
              <Typography variant="body2">Mr. Solo Dolo III</Typography>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            {list.map(({ key, icon, title, onclick }) => (
              <>
                <Stack
                  direction={"row"}
                  spacing={3}
                  justifyContent={"flex-start"}
                  sx={{ cursor: "pointer" }}
                  onclick={onclick}
                >
                  <Stack direction={"row"} spacing={2} alignItems="center">
                    {icon}
                    <Typography variant="body2">{title}</Typography>
                  </Stack>
                   <Divider  />
                </Stack>
              </>
            ))}
          </Stack>

         
        </Stack>
      </Box>
      {/* right panel */}
    </Stack>
  );
};

export default Settings;
