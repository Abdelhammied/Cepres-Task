import { ActionPayloadInterface } from "store/util.store";

import {
  contactsInitialState,
  ContactsInitialStateInterface,
} from "./conacts.state";

import { UPDATE_CONTACTS_STATE } from "./contacts.types";

export default function contactsReducer(
  state: ContactsInitialStateInterface = contactsInitialState,
  action: ActionPayloadInterface
) {
  if (action.type === UPDATE_CONTACTS_STATE) {
    return { ...state, [action.payload.key]: action.payload.value };
  }

  return state;
}
