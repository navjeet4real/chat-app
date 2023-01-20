import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowDownLeft, ArrowUpRight, Phone, PhoneCall } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge";

const CallLogElement = ({ online, incoming, missed }) => {
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
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
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
            <Phone size={18} color='green'/>
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = () => {
  return <div>CallElement</div>;
};
export { CallLogElement, CallElement };
