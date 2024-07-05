import Invest from "@/components/Invest";
import { getBusiness } from "@/utils/actions";
import { Business } from "@/utils/interfaces";
import {
  Box,
  CircularProgress,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Suspense } from "react";

const page = async ({ params }: any) => {
  console.log(params);

  const data = getBusiness();

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      <Container sx={{ marginTop: "2rem" }}>
        <Box
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
        >
          <Image
            style={{ width: "100%", height: 300, objectFit: "cover" }}
            src={data.Path}
            alt={data.Name}
            width={500}
            height={500}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Typography variant="h4">{data.Name}</Typography>
            <Typography variant="h6">{data.Header}</Typography>
            <Typography variant="h5">
              ${data.TargetAmount} for {data.Percent}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(data.CurrentAmount / data.TargetAmount) * 100}
            />
            <Invest
              currentAmount={data.CurrentAmount}
              targetAmount={data.TargetAmount}
            />
          </Box>
        </Box>
        <Typography marginTop={"1rem"} variant="body1">
          {data.Description}
        </Typography>
      </Container>
    </Suspense>
  );
};
export default page;
