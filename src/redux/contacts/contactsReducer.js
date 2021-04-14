import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import contactsActions from "./contactsActions";

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.removeContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload.filter,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactsError]: () => false,

  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({ items, filter, loading });
