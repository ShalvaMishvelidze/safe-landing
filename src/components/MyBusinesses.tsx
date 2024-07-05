"use client";
import { Business } from "@/utils/interfaces";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CreateBusinessModal from "./CreateBusinessModal";
import { useState } from "react";

const MyBusinesses = ({ businesses }: { businesses: Business[] }) => {
  const [modal, setModal] = useState(false);
  return (
    <Box>
      {modal && <CreateBusinessModal setModal={setModal} />}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          width: "100%",
        }}
      >
        <Typography variant="h4" textAlign="left">
          My Businesses
        </Typography>
        <Button variant="contained" onClick={() => setModal(true)}>
          add new business
        </Button>
      </Box>
      <Grid container spacing={2} marginTop={"1rem"} padding={"0 2rem"}>
        {businesses.map((business, i: number) => (
          <>
            <Grid
              item
              sx={{ width: "clamp(300px, 100%, 500px)" }}
              xs={12}
              sm={6}
              md={4}
              key={business.Id + i}
            >
              <Card sx={{ padding: "1rem" }}>
                <Image
                  src={business.Path}
                  alt={business.Name}
                  width={500}
                  height={240}
                  style={{ width: "100%", objectFit: "cover", height: "10rem" }}
                />
                <Typography variant="h6">{business.Name}</Typography>
                <Typography variant="body1">{business.Header}</Typography>
                <Typography variant="body2">{business.Description}</Typography>
                <Typography variant="body2">
                  ${business.TargetAmount} for {business.Percent}%
                </Typography>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};
export default MyBusinesses;
