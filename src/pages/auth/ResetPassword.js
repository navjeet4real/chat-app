import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";
const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot Password.?
        </Typography>
        <Typography sx={{ color: "text.primary", mb: 5 }}>
          Please enter the email address associated with you account and we will
          email you a link to reset your password.
        </Typography>
        <ResetPasswordForm />
        <Link
          component={RouterLink}
          to="/auth/login"
          color={"inherit"}
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: "auto",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <CaretLeft />
          Return to Sign in
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
