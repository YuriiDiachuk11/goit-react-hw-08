import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      const filteredName = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());

      const filteredNumber = contact.number[0] === filter[0];

      return filteredName || filteredNumber;
    });
  }
);
