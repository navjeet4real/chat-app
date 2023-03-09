import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { ShowSnackBar } from "../../redux/slices/app";
import { socket, connectSocket } from "../../socket";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const user_id = window.localStorage.getItem("user_id");

  console.log(socket,"socket");

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
    }

    // Remove event listener on component unmount
    return () => {
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
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
