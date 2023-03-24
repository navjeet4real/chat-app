import React,{useState} from "react";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { UpdateSidebarType } from "../redux/slices/app";
import { LinkMsg, DocMsg } from "./Conversation/MsgTypes";
import useResponsive from "../hooks/useResponsive";


const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const isDesktop = useResponsive("up", "md");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: !isDesktop ? "100vw" : 320, maxHeight: "100vh" }}>
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
            // justifyContent="space-between"
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          // sx={{ px: 2, pt: 2 }}
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                      return (
                        <Grid key={index} item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              case 1:
                return SHARED_LINKS.map((item) => {
                  return <LinkMsg item={item} />;
                });
              case 2:
                return SHARED_DOCS.map((item) => {
                  return <DocMsg item={item} />;
                });
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
