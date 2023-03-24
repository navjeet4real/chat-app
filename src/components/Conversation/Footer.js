import React, { useState } from "react";
import { TextField, Box, Stack, Fab, IconButton, InputAdornment, Tooltip } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Picker from '@emoji-mart/react'
import data from "@emoji-mart/data";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];
const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState(false)
  return (
    <StyledInput
      placeholder="Write a message...."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'max-content' }}>
            <Stack sx={{
              position: "relative",
              display: openActions ? "inline-block" : "none"
            }}>
              {Actions.map((item) => (
                <Tooltip title={item.title} placement="right" >
                  <Fab sx={{
                    position: "absolute",
                    top: -item.y,
                    backgroundColor: item.color,
                  }}
                    aria-lable="add"
                  >
                    {item.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setOpenActions((prev) => !prev)
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => {
              setOpenPicker((prev) => !prev)
            }}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false)
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
      <Stack direction={"row"} spaccing={3} alignItems="center">
        <Stack sx={{ width: "100%" }}>
          <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            justifyContent={"center"}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
