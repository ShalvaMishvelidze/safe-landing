import BusinessCard from "@/components/BusinessCard";
import SearchBar from "@/components/SearchBar";
import { getBusinesses } from "@/utils/actions";
import { Business } from "@/utils/interfaces";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";

const page = async () => {
  const data: any[] = getBusinesses();

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <SearchBar />
      <Typography variant="h4" gutterBottom marginTop={"1rem"}>
        Businesses
      </Typography>
      <Grid container spacing={4}>
        {data.map((business: Business, i: number) => (
          <Grid item xs={12} sm={6} md={4} key={business.Id + i}>
            <BusinessCard business={business} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default page;
