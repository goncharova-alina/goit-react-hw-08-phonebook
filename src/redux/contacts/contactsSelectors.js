import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getContactById = createSelector(
  [getContacts, (state, contactId) => contactId],
  (contacts, contactId) => contacts.find((contact) => contact.id === contactId)
);

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export default {
  getContacts,
  getLoading,
  getFilter,
  getContactById,
  getVisibleContacts,
};
