import { Colors } from "@/theme/colors";
import { User } from "@/utils/interfaces";
import { profile_schema } from "@/utils/zod_schemas";
import { Box, Button, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const ProfileCard = ({ user: u }: { user: User }) => {
  const [user, setUser] = useState<User>(u);

  const handleSubmit = () => {
    try {
      profile_schema.parse(user);
      toast.success("Profile details changed successfully!");
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          toast.error(error.message);
        });
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "2rem",
      }}
    >
      <Image
        style={{
          borderRadius: "50%",
          outline: `5px solid ${Colors.charcoal_5}`,
          outlineOffset: "5px",
        }}
        src={user.Path}
        alt={user.Username}
        width={200}
        height={200}
      />
      <FormControl
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Username"
          value={user.Username}
          onChange={(e) => setUser({ ...user, Username: e.target.value })}
        />
        <TextField
          label="Email"
          value={user.Email}
          onChange={(e) => setUser({ ...user, Email: e.target.value })}
        />
        <TextField
          label="Phone"
          value={user.Phone}
          onChange={(e) => setUser({ ...user, Phone: e.target.value })}
        />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button variant="contained" onClick={handleSubmit}>
            save
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setUser(u);
            }}
          >
            resets
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
export default ProfileCard;
