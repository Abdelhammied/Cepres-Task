import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: 4,
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          marginBottom: 24,
        },
      },
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    secondary: {
      main: "#CACACA",
    },
  },
});
