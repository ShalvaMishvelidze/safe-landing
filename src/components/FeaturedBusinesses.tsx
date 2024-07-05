import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
} from "@mui/material";
import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    description: "Description 1",
    progress: 20,
    image: "/small-business.jpg",
  },
  {
    title: "Project 2",
    description: "Description 2",
    progress: 75,
    image: "/small-business.jpg",
  },
  {
    title: "Project 3",
    description: "Description 3",
    progress: 90,
    image: "/small-business.jpg",
  },
];

const FeaturedBusinesses = () => (
  <Container>
    <Typography variant="h4" margin={"2rem 0"} textAlign={"center"}>
      Featured Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={320}
              style={{ height: "280px", width: "100%", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <LinearProgress variant="determinate" value={project.progress} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default FeaturedBusinesses;
