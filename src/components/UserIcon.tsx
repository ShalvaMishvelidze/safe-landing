"use client";
import { Button, colors } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Colors } from "../theme/colors";

const UserIcon = () => {
  const [user, setUser] = useState<Boolean>(false);
  return (
    <>
      {user ? (
        <Button color="inherit">
          <AccountCircle fontSize="large" />
        </Button>
      ) : (
        <Link href="/auth">
          <Button
            color="inherit"
            sx={{
              backgroundColor: Colors.blue_11,
              fontSize: "1rem",
              fontWeight: "600",
              padding: "0.3rem 1rem",
              "&:hover": {
                backgroundColor: Colors.blue_10,
              },
            }}
          >
            Sign in
          </Button>
        </Link>
      )}
    </>
  );
};
export default UserIcon;
