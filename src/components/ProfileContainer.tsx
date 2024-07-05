"use client";
import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { User } from "@/utils/interfaces";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import MyBusinesses from "./MyBusinesses";
import MyInvestments from "./MyInvestments";
import MyCharities from "./MyCharities";

const ProfileContainer = ({ user }: { user: User }) => {
  const [page, setPage] = useState("profile");
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("page")) {
      setPage(searchParams.get("page") as string);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {page === "profile" && <ProfileCard user={user} />}
      {page === "businesses" && <MyBusinesses businesses={user.Businesses} />}
      {page === "investments" && <MyInvestments user={user} />}
      {page === "charities" && <MyCharities user={user} />}
    </Suspense>
  );
};
export default ProfileContainer;
