import { AppDispatch, RootState } from "store/store.config";
import contacts from "assets/data/contacts.json";
import {
  ContactInterface,
  contactsInitialState,
  ContactsStateType,
} from "./conacts.state";
import { UPDATE_CONTACTS_STATE } from "./contacts.types";

import { toast } from "react-toastify";

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

export const deleteContact =
  (contactId: string) => (dispatch: AppDispatch, store: () => RootState) => {
    const contacts = store().contacts.contacts;
    const contact = store().contacts.contact;

    let contactsCopy = contacts.slice();

    contactsCopy = contactsCopy.filter((contact) => contact.id !== contactId);

    dispatch(updateContactsState("contacts", contactsCopy));

    toast("Deleted Successfully.", {
      type: "success",
    });

    if (contact.id === contactId) {
      dispatch(updateContactsState("contact", contactsCopy[0]));
    }
  };

export const initializeContacts = () => (dispatch: AppDispatch) => {
  let contactsDataType = contacts as ContactInterface[];

  dispatch(updateContactsState("contacts", contactsDataType));

  dispatch(updateContactsState("contact", contactsDataType[0]));
};

export const resetContact = () => (dispatch: AppDispatch) => {
  dispatch(updateContactsState("contact", contactsInitialState.contact));
};
