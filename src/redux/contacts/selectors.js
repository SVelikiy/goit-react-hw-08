import { selectFilter } from '../filters/selectors'
import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter !== "") {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
);
