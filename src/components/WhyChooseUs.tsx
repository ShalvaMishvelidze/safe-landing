import { Container, Grid, Typography, Avatar } from "@mui/material";
import { Build, GppGood, People } from "@mui/icons-material";
import { Colors } from "@/theme/colors";

const benefits = [
  {
    icon: <Build />,
    title: "Easy Setup",
    description:
      "Get your project off the ground with our user-friendly platform. Setting up your campaign is straightforward, allowing you to focus on what matters most—your business.",
  },
  {
    icon: <GppGood />,
    title: "Secure Payments",
    description:
      "Experience peace of mind with our secure payment system. Your financial safety is our top priority, ensuring every transaction is protected.",
  },
  {
    icon: <People />,
    title: "Wide Reach",
    description:
      "Expand your project's reach with our extensive network. Connect with a diverse audience of backers ready to support innovative ideas and bring them to fruition.",
  },
];

const WhyChooseUs = () => (
  <Container>
    <Typography variant="h4" marginBottom={"2rem"} textAlign={"center"}>
      Why Choose Us
    </Typography>
    <Grid container spacing={4} marginBottom={"1rem"}>
      {benefits.map((benefit, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            gap: "1rem",
          }}
        >
          <Avatar sx={{ backgroundColor: Colors.blue_4 }}>
            {benefit.icon}
          </Avatar>
          <Typography variant="h6">{benefit.title}</Typography>
          <Typography variant="body2" textAlign={"center"}>
            {benefit.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default WhyChooseUs;
