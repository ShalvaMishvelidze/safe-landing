import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import Image from "next/image";

const testimonials = [
  {
    name: "User 1",
    quote:
      "Great platform! It's been an incredible journey from the start to the end. The support and resources available have truly made a difference in launching our project.",
    image: "/user.jpg",
  },
  {
    name: "User 2",
    quote:
      "Helped me a lot! The ease of use and the community engagement exceeded my expectations. I was able to reach my funding goal much quicker than anticipated.",
    image: "/user.jpg",
  },
  {
    name: "User 3",
    quote:
      "Absolutely fantastic experience! The platform not only helped me raise the necessary funds but also connected me with amazing people passionate about my project.",
    image: "/user.jpg",
  },
];

const Testimonials = () => (
  <Container>
    <Typography variant="h4" textAlign={"center"} marginBottom={"2rem"}>
      Testimonials
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Image
                  src={testimonial.image}
                  alt="user image"
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
                <Typography variant="h6">{testimonial.name}</Typography>
              </Box>
              <Typography variant="body2">
                &quot;{testimonial.quote}&quot;
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Testimonials;
