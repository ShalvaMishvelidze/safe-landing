"use client";
import { register_schema } from "@/utils/zod_schemas";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const Register = () => {
  const [user, setUser] = useState({
    Username: "",
    Email: "",
    Phone: "",
    Gender: "true",
    Password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      register_schema.parse(user);
      toast.success("Registered successfully!");
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
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FormControl sx={{ width: 300 }} onSubmit={handleSubmit}>
        <TextField
          id="username-label"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          value={user.Username}
          name="Username"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={user.Email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="Password"
          type="password"
          fullWidth
          margin="normal"
          value={user.Password}
          onChange={handleChange}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <TextField
            name="Phone"
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={user.Phone}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              label="Gender"
              value={user.Gender}
              onChange={(e) => setUser({ ...user, Gender: e.target.value })}
            >
              <MenuItem value={"true"}>Male</MenuItem>
              <MenuItem value={"false"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
          onSubmit={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
export default Register;
