"use client";
import { User } from "@/utils/interfaces";
import { Box } from "@mui/material";
import ProfileContainer from "./ProfileContainer";
import ProfileNav from "./ProfileNav";
import { Suspense } from "react";
import Toast from "./Toast";

const Profile = ({ user }: { user: User }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toast />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          width: "100%",
        }}
      >
        <ProfileContainer user={user} />
        <ProfileNav />
      </Box>
    </Suspense>
  );
};
export default Profile;
