import React from "react";
import { Box, List, ListItemText } from "@mui/material";
import Logo from "components/Logo";
import { Routes } from "routes/routes";

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={(theme) => theme.spacing(5)}
    >
      <Logo />

      <List sx={{ display: "flex", gap: "30px", flexDirection: "row" }}>
        {Routes.map((route) => (
          <ListItemText
            key={route.id}
            primary={route.title}
            primaryTypographyProps={{ sx: { fontWeight: "bold" } }}
          />
        ))}
      </List>
    </Box>
  );
}
