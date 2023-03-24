import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { SelectConversation, ShowSnackBar } from "../../redux/slices/app";
import { socket, connectSocket } from "../../socket";
import {
  AddDirectConversation,
  UpdateDirectConversation,
} from "../../redux/slices/conversation";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  // const { conversations } = useSelector(
  //   (state) => state.conversations.direct_chat
  // );

  const dispatch = useDispatch();

  const user_id = window.localStorage.getItem("user_id");

  console.log(socket, "socket");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }
      socket.on("new_friend_request", (data) => {
        dispatch(
          ShowSnackBar({
            severity: "success",
            message: "New friend request received",
          })
        );
      });

      socket.on("request_accepted", (data) => {
        dispatch(
          ShowSnackBar({
            severity: "success",
            message: "Friend Request Accepted",
          })
        );
      });

      socket.on("request_sent", (data) => {
        dispatch(ShowSnackBar({ severity: "success", message: data.message }));
      });

      // socket.on("start_chat", (data) => {
      //   console.log(data, "start_chat data");
      //   const existing_conversation = conversations.find(
      //     (item) => item.id === data._id
      //   );

      //   if (existing_conversation) {
      //     dispatch(
      //       UpdateDirectConversation({
      //         conversation: data,
      //       })
      //     );
      //   } else {
      //     // add direct convo
      //     dispatch(
      //       AddDirectConversation({
      //         conversation: data,
      //       })
      //     );
      //   }
      //   dispatch(SelectConversation({ room_id: data._id }));
      // });
    }

    // Remove event listener on component unmount
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
    };
  }, [isLoggedIn, socket]);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <>
      <Stack direction={"row"}>
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
