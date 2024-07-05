"use client";
import { login_schema } from "@/utils/zod_schemas";
import { Button, FormControl, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const Login = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      login_schema.parse(user);
      toast.success("Logged in successfully!");
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          toast.error(error.message);
        });
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: 300 }}>
          <TextField
            label="Email"
            variant="outlined"
            name="Email"
            fullWidth
            margin="normal"
            type="email"
            value={user.Email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="Password"
            fullWidth
            margin="normal"
            value={user.Password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};
export default Login;
