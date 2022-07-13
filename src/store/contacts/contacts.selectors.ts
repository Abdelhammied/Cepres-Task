import { RootState } from "store/store.config";
import { ContactInterface, ContactsStateType } from "./conacts.state";

export const contactsStateSelector =
  (key: ContactsStateType) =>
  (store: RootState): ContactInterface | ContactInterface[] =>
    store.cnotacts[key];
