import { Colors } from "@/theme/colors";
import { Typography, Button, Grid } from "@mui/material";

const HeroSection = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    sx={{
      position: "relative",
      height: "calc(100vh - 64px)",
      width: "100%",
      zIndex: 1,
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-10px",
        left: "-10px",
        right: "-10px",
        bottom: "-10px",
        backgroundImage: "url(./small-business-3.jpg)",
        backgroundSize: "cover",
        filter: "blur(3px)",
        zIndex: -1,
      },
    }}
  >
    <Grid item xs={12} sm={6}>
      <Typography variant="h2" color={Colors.white_2} fontWeight="400">
        Empower Your Small Business
      </Typography>
      <Typography variant="h5" color={Colors.white_1}>
        Join our crowdfunding platform to bring your ideas to life.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: "0.6rem" }}>
        Get Started
      </Button>
    </Grid>
  </Grid>
);

export default HeroSection;
