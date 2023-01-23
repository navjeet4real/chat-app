import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowLeft, CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            <Stack direction={"row"} alignItems="center">
              <IconButton>
                <CaretLeft size={24} color="#484B4B" />
              </IconButton>
              <Typography variant="h5">Profile</Typography>
            </Stack>
            {/* profile from  */}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
