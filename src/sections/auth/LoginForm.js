import React from "react";
import { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/system";
import { Alert, InputAdornment } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "dawg@gmail.com",
    password: "Damn@420",
  };
  const methods = useForm({
    resolver: yupResolver(LoginForm),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
        
    } catch (error) {
        console.error(error)
        reset();
        setError("afterSubmit", {
            ...error,
            message: error.message
        })
    }
  }
  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
    >
        <Stack spacing={3}>
            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        </Stack>
        <RHFTextField name="email" lable="Email address" />
        <RHFTextField name="password" lable="Password" type={showPassword ? "text" : "password" } InputProps={{
            endAdornment: {
                // <InputAdornment />
            }
        }} />


    </FormProvider>
  );
};

export default LoginForm;
