import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        height: (theme) => theme.spacing(30),
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: (theme) => theme.palette.secondary.main,
        borderRadius: (theme) => theme.spacing(1),
      }}
    >
      <Typography>[Footer]</Typography>
    </Box>
  );
}
