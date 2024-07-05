import { User } from "@/utils/interfaces";
import { Container, Typography } from "@mui/material";

const MyCharities = ({ user }: { user: User }) => {
  console.log(user);

  return (
    <Container>
      <Typography marginTop={"2rem"} marginLeft={"2rem"} variant="h5">
        No charities to display
      </Typography>
    </Container>
  );
};
export default MyCharities;
