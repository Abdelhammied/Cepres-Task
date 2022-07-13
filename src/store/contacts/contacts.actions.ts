import { AppDispatch } from "store/store.config";
import contacts from "assets/data/contacts.json";
import {
  ContactInterface,
  contactsInitialState,
  ContactsStateType,
} from "./conacts.state";
import { UPDATE_CONTACTS_STATE } from "./contacts.types";

export const updateContactsState =
  (key: ContactsStateType, value: ContactInterface | ContactInterface[]) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATE_CONTACTS_STATE,
      payload: {
        key,
        value,
      },
    });
  };

export const initializeContacts = () => (dispatch: AppDispatch) => {
  dispatch(updateContactsState("contacts", contacts));

  dispatch(updateContactsState("contact", contacts[0]));
};

export const resetContact = () => (dispatch: AppDispatch) => {
  dispatch(updateContactsState("contact", contactsInitialState.contact));
};
