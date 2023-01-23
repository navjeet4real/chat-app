import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowDownLeft, ArrowUpRight, Phone, PhoneCall, VideoCamera } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge";

const CallLogElement = ({ online, incoming, missed,img, name }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height: 60,
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2} alignItems="row">
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={img}
                  alt={name}
                />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {name}
              </Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
              <Stack alignItems={"center"} direction="row" spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 1:23 PM</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone color='green'/>
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({online ,img, name}) => {
  return (
    <>
     <Box
        sx={{
          width: "100%",
          // height: 60,
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2} alignItems="row">
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
              <Avatar
                  src={img}
                  alt={name}
                />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {name}
              </Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
              <Stack alignItems={"center"} direction="row" spacing={1}>
               
                <Typography variant="caption">Yesterday 1:23 PM</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={'row'}alignItems={'center'}>
          <IconButton >
            <Phone  color='green'/>
          </IconButton>
          <IconButton>
          <VideoCamera color={'green'} />
          </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
    );
};
export { CallLogElement, CallElement };
