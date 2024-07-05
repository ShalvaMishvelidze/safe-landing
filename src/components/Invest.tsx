"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Invest = ({
  targetAmount,
  currentAmount,
}: {
  targetAmount: number;
  currentAmount: number;
}) => {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <TextField
        value={amount}
        onChange={(e) => {
          const regex = /^\d*\.?\d*$/;
          if (e.target.value === "" || regex.test(e.target.value)) {
            if (e.target.value === "." || e.target.value === "0") {
              setAmount(1);
            } else if (
              parseFloat(e.target.value) >
              targetAmount - currentAmount
            ) {
              setAmount(targetAmount - currentAmount);
            } else if (isNaN(parseFloat(e.target.value))) {
              setAmount(1);
            } else {
              setAmount(parseFloat(e.target.value));
            }
          }
        }}
        type="text"
        label="Enter how much you want to invest"
      />
      <Button variant="contained" color="primary">
        Invest
      </Button>
    </>
  );
};
export default Invest;
