"use client";
import { Colors } from "@/theme/colors";
import { business_schema } from "@/utils/zod_schemas";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const CreateBusinessModal = ({ setModal }: any) => {
  const [business, setBusiness] = useState({
    Name: "",
    Header: "",
    Description: "",
    TargetAmount: "",
    Deadline: "",
    Charity: "false",
    Percent: "",
  });

  const handleSubmit = () => {
    try {
      business_schema.parse(business);
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
    <Container
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: Colors.charcoal_7_transparent,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <FormControl
        sx={{
          backgroundColor: Colors.white_1,
          padding: "2rem",
          borderRadius: "0.5rem",
          width: "clamp(300px, 100%, 500px)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          label="Name"
          value={business.Name}
          onChange={(e) => setBusiness({ ...business, Name: e.target.value })}
        />
        <TextField
          label="Header"
          value={business.Header}
          onChange={(e) => setBusiness({ ...business, Header: e.target.value })}
        />
        <TextField
          label="Description"
          value={business.Description}
          onChange={(e) =>
            setBusiness({ ...business, Description: e.target.value })
          }
        />
        <TextField
          label="Target Amount"
          value={business.TargetAmount}
          onChange={(e) =>
            setBusiness({ ...business, TargetAmount: e.target.value })
          }
        />
        <TextField
          label="Deadline"
          value={business.Deadline}
          onChange={(e) =>
            setBusiness({ ...business, Deadline: e.target.value })
          }
        />
        <TextField
          label="Percent"
          type="number"
          value={business.Percent}
          onChange={(e) =>
            setBusiness({ ...business, Percent: e.target.value })
          }
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="Charity-select-label">Charity</InputLabel>
          <Select
            labelId="Charity-select-label"
            id="Charity-select"
            label="Gender"
            value={business.Charity}
            onChange={(e) =>
              setBusiness({ ...business, Charity: e.target.value })
            }
          >
            <MenuItem value={"true"}>true</MenuItem>
            <MenuItem value={"false"}>false</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            add
          </Button>
          <Button variant="contained" onClick={() => setModal(false)}>
            cancel
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};
export default CreateBusinessModal;
