import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
import UserIcon from "../components/UserIcon";
import Image from "next/image";
const MUINav = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Image src="/logo.png" alt="logo" width={150} height={40} />
        </IconButton>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/profile">
            <Button color="inherit">Profile</Button>
          </Link>
          <Link href="/businesses">
            <Button color="inherit">Businesses</Button>
          </Link>
          <UserIcon />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default MUINav;
