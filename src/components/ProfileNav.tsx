import { Colors } from "@/theme/colors";
import { Box, List, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";

const ProfileNav = () => {
  const router = useRouter();

  const handleClick = (page: string) => {
    router.push(`/profile?page=${page}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderLeft: `1px solid ${Colors.gray_3}`,
        paddingLeft: "1rem",
      }}
    >
      <List sx={{ width: "100%" }}>
        <MenuItem onClick={() => handleClick("profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleClick("businesses")}>
          Businesses
        </MenuItem>
        <MenuItem onClick={() => handleClick("investments")}>
          Investments
        </MenuItem>
        <MenuItem onClick={() => handleClick("charities")}>Charities</MenuItem>
      </List>
    </Box>
  );
};
export default ProfileNav;
