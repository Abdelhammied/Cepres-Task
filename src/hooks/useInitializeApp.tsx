import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeContacts } from "store/contacts/contacts.actions";
import { AppDispatch } from "store/store.config";

export default function useInitializeApp() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeContacts());
  }, []);
}
