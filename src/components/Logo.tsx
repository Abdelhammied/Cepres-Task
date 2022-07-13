import { Typography } from "@mui/material";
import React from "react";

export default function Logo() {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        background: (theme) => theme.palette.secondary.main,
        color: "#fff",
        padding: (theme) => theme.spacing(2),
        borderRadius: (theme) => theme.spacing(1),
        fontWeight: "bold",
        letterSpacing: 2,
      }}
    >
      Cepres
    </Typography>
  );
}
