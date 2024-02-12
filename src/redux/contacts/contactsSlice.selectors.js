import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts.items;
export const selectFilter = state => state.contactsData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.phone.includes(filter)
      );
    })
);
