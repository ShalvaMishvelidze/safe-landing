import { Container, Typography, Button } from "@mui/material";

const CallToAction = () => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      gap: "1rem",
    }}
  >
    <Typography variant="h4">Start Your Project Today</Typography>
    <Button variant="contained" color="primary">
      Join Now
    </Button>
  </Container>
);

export default CallToAction;
