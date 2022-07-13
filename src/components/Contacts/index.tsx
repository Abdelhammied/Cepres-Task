import React from "react";
import ContactHeader from "./components/ContactHeader";
import ContactList from "./components/ContactList";
import ContactModal from "./components/ContactModal";

export default function index() {
  return (
    <>
      <ContactHeader />

      <ContactList />

      <ContactModal />
    </>
  );
}
