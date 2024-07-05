import Profile from "@/components/Profile";
import { getUser } from "@/utils/actions";
import { Box, CircularProgress } from "@mui/material";

const page = async () => {
  const data: any = getUser();

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        paddingTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Profile user={data} />
    </Box>
  );
};
export default page;
