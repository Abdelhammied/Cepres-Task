import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "store/contacts/contacts.reducer";

export default combineReducers({
  contacts: contactsReducer,
});
