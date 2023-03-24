import React, { useState, useEffect } from "react";
import {
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
  Box,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { FetchDirectConversations } from "../../redux/slices/conversation";
import useResponsive from "../../hooks/useResponsive";

const user_id = window.localStorage.getItem("user_id");

const Chats = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isDesktop = useResponsive("up", "md");
  // const {conversations} = useSelector((state) => state.conversations.direct_chat)

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  useEffect(() => {
    socket.emit("get_direct_conversations",{user_id},(data) => {
      // data => list of conversations
      dispatch(FetchDirectConversations({ conversations: data }));
    })
  },[])
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: isDesktop ? 320 : "100vw",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            justifyContent={"space-between"}
            alignItems="center"
            direction={"row"}
          >
            <Typography variant="h5">Chats</Typography>
            <Stack direction={"row"} alignItems="center" spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
                sx={{ width: "max-content" }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} alignItems="center" spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((item) => item.pinned).map((item, index) => {
                  return <ChatElement key={index}  {...item} />;
                })}
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {ChatList && ChatList.filter((item) => !item.pinned).map((item, index) => {
                  return <ChatElement key={index} {...item} />;
                })}
                {/* {conversations && conversations.filter((item) => !item.pinned).map((item, index) => {
                  return <ChatElement key={index} {...item} />;
                })} */}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
