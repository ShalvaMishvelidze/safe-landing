import { getInvestments } from "@/utils/actions";
import { User } from "@/utils/interfaces";
import { Box, Card, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";

const MyInvestments = ({ user }: { user: User }) => {
  console.log(user);

  const [investments, setInvestments] = useState(getInvestments());

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
      }}
    >
      {investments.map((investment, i: number) => {
        return (
          <Card
            sx={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            key={investment.Id + i}
          >
            <Typography variant="h6">
              {investment.BusinessResponse.Name}
            </Typography>
            <Typography variant="body2">
              {investment.BusinessResponse.Description}
            </Typography>
            <Typography variant="body1">
              ${investment.Amount} for {investment.Percent}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={
                (investment.BusinessResponse.CurrentAmount /
                  investment.BusinessResponse.TargetAmount) *
                100
              }
            />
          </Card>
        );
      })}
    </Box>
  );
};
export default MyInvestments;
