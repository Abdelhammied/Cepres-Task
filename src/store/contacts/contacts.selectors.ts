import { RootState } from "store/store.config";
import { ContactsStateType, ContactsStateValuesType } from "./conacts.state";

export const contactsStateSelector =
  (key: ContactsStateType) =>
  (store: RootState): ContactsStateValuesType =>
    store.contacts[key];
