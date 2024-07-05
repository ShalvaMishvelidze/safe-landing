import { Business } from "@/utils/interfaces";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import Link from "next/link";

const BusinessCard = ({ business }: { business: Business }) => {
  const {
    Name,
    Header,
    Description,
    Path,
    TargetAmount,
    CurrentAmount,
    Deadline,
  } = business;

  const progress = (CurrentAmount / TargetAmount) * 100;

  return (
    <Card>
      <CardMedia component="img" alt={Name} height="140" image={Path} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.2rem",
        }}
      >
        <Typography variant="h5" component="div">
          {Name}
        </Typography>
        <Typography variant="subtitle1">{Header}</Typography>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
        <Typography
          variant="body2"
          color="text.secondary"
        >{`$${CurrentAmount} raised of $${TargetAmount}`}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >{`Deadline: ${new Date(Deadline).toLocaleDateString()}`}</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href={`/businesses/${business.Id}`}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
