import { AppDispatch, RootState } from "store/store.config";
import contacts from "assets/data/contacts.json";
import { v4 as uuidv4 } from "uuid";

import {
  ContactInterface,
  contactsInitialState,
  ContactsInitialStateInterface,
  ContactsStateType,
  ContactsStateValuesType,
} from "./conacts.state";
import { UPDATE_CONTACTS_STATE } from "./contacts.types";

import { toast } from "react-toastify";
import { useValidateContact } from "validations/contacts.validator";
import { ValidationError } from "yup";

export const updateContactsState =
  (key: ContactsStateType, value: ContactsStateValuesType) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATE_CONTACTS_STATE,
      payload: {
        key,
        value,
      },
    });
  };

export const handleCreateContact = () => (dispatch: AppDispatch) => {
  let contact = {
    ...contactsInitialState.contact,
    id: uuidv4(),
    job_title: "Tester",
  };

  dispatch(updateContactsState("erorrs", {}));

  dispatch(updateContactsState("openModal", true));

  dispatch(updateContactsState("state", "create"));

  dispatch(updateContactsState("contact", contact));
};

export const handleEditContact =
  (contact: ContactInterface) => (dispatch: AppDispatch) => {
    dispatch(updateContactsState("state", "update"));

    dispatch(updateContactsState("contact", contact));

    dispatch(updateContactsState("openModal", true));
  };

export const createOrUpdateContact =
  (contact: ContactInterface) =>
  (dispatch: AppDispatch, store: () => RootState) => {
    try {
      const state = store().contacts.state;
      const contacts = store().contacts.contacts;

      let contactsCopy = contacts.slice();

      useValidateContact(contact);

      if (state === "create") {
        contactsCopy.push(contact);
      }

      if (state === "update") {
        let contactIndex = contactsCopy.findIndex(
          (contactCopy) => contactCopy.id === contact.id
        );

        contactsCopy[contactIndex] = contact;
      }

      dispatch(updateContactsState("contacts", contactsCopy));
      dispatch(updateContactsState("contact", contact));

      dispatch(updateContactsState("openModal", false));

      toast("Success.", {
        type: "success",
      });
    } catch (error) {
      let validationError = error as ValidationError;
      let errors: ContactsInitialStateInterface["erorrs"] = {};

      if (validationError.name === "ValidationError") {
        validationError.inner.forEach((innerError) => {
          if (innerError.path) {
            let path = innerError.path as string;

            errors[path] = innerError.message.replaceAll("_", " ");
          }
        });

        dispatch(updateContactsState("erorrs", errors));
      }
    }
  };

export const deleteContact =
  (contactItem: ContactInterface) =>
  (dispatch: AppDispatch, store: () => RootState) => {
    const contacts = store().contacts.contacts;
    const contact = store().contacts.contact;

    const contactId = contactItem.id;

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
