import { Typography, Button, Box } from "@mui/material";
import { Facebook, X } from "@mui/icons-material";
import { Colors } from "@/theme/colors";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: Colors.blue_12,
      marginTop: "3rem",
      padding: "1rem 4rem",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Box>
      <Typography variant="body2" color={Colors.white_1}>
        © 2024 CrowdfundPlatform. All rights reserved.
      </Typography>
    </Box>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        startIcon={
          <Facebook
            sx={{
              fontSize: "3rem !important",
            }}
          />
        }
      >
        Facebook
      </Button>
      <Button
        startIcon={
          <X
            sx={{
              fontSize: "3rem !important",
            }}
          />
        }
      >
        X.com
      </Button>
    </Box>
  </Box>
);

export default Footer;
