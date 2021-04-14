import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContacstError = createAction("contacts/fetchError");

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/removeError");

const changeFilter = createAction("contacts/changeFilter", (filter) => ({
  payload: { filter },
}));

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContacstError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
};
