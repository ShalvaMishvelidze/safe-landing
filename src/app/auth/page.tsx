"use client";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Toast from "@/components/Toast";
import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        gap: "10px",
      }}
    >
      <Toast />
      {login ? <Login /> : <Register />}
      {login ? (
        <Typography textTransform={"capitalize"}>
          don&apos;t have an account yet?{" "}
          <Button onClick={() => setLogin(false)}>Register</Button>
        </Typography>
      ) : (
        <Typography textTransform={"capitalize"}>
          already have an account?{" "}
          <Button onClick={() => setLogin(true)}>Login</Button>
        </Typography>
      )}
    </Container>
  );
};
export default Auth;
