import { Container, Grid, Typography, Avatar } from "@mui/material";
import { AddBusiness, Paid, Share } from "@mui/icons-material";
import { Colors } from "@/theme/colors";

const steps = [
  {
    icon: <AddBusiness color="primary" />,
    title: "Create a Project",
    description:
      "Kickstart your journey by creating a compelling project. Outline your business idea, set your funding goal, and tell your story to attract the backers.",
  },
  {
    icon: <Share color="primary" />,
    title: "Share Your Project",
    description:
      "Maximize your project's visibility by sharing it with friends, family, and social networks. Engage with your community to spread the word and build support.",
  },
  {
    icon: <Paid color="primary" />,
    title: "Get Funded",
    description:
      "Once your project is live and shared, watch as backers contribute to your goal. Reach or exceed your target to secure funding and bring your vision to life.",
  },
];

const HowItWorks = () => (
  <Container>
    <Typography textAlign={"center"} variant="h4" margin={"2rem 0"}>
      How It Works
    </Typography>
    <Grid container spacing={4} marginBottom="1rem">
      {steps.map((step, index) => (
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
          <Avatar
            sx={{
              backgroundColor: Colors.blue_2,
            }}
          >
            {step.icon}
          </Avatar>
          <Typography variant="h6">{step.title}</Typography>
          <Typography variant="body2" textAlign={"center"}>
            {step.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HowItWorks;
