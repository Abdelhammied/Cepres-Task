import { Container } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
