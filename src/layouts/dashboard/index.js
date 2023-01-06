import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  const theme = useTheme();

  
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
