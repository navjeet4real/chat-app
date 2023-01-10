import React from 'react'
import { useTheme } from "@emotion/react";
import {
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import {
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
} from "phosphor-react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px !important",
      paddingBottom: "12px !important",
    },
  }));

const Footer = () => {
    const theme = useTheme();
  return (
    <Box
    sx={{
      width: "100%",
      backgroundColor: theme.palette.mode === "Light" ? "#F8FAFF" : theme.palette.background.paper,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
    }}
    p={2}
  >
    <Stack direction={"row"} spaccing={3} alignItems="center">
      <StyledInput
        placeholder="Write a message...."
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Box
        sx={{
          height: 48,
          width: 48,
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5,
        }}
      >
        <Stack justifyContent={"center"} sx={{ height: "100%", width: "100%" }} alignItems="center">
          <IconButton >
            <PaperPlaneTilt color="#fff" />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  </Box>
  )
}

export default Footer
