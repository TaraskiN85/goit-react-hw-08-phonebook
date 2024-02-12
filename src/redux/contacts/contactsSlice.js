import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addContactRequest,
  allContactsRequest,
  deleteContactRequest,
} from 'services/api';
import { STATUSES } from 'services/constants';

const initialState = {
  contacts: {
    items: [],
    status: STATUSES.idle,
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await allContactsRequest();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContactRequest(contactId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await addContactRequest(contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const pendingCallback = state => {
  state.isLoading = true;
  state.status = STATUSES.pending;
  state.error = null;
};
const errorCallback = (state, action) => {
  state.isLoading = false;
  state.status = STATUSES.error;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contactsData',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, pendingCallback)
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchAllContacts.rejected, errorCallback)
      .addCase(deleteContact.pending, pendingCallback)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(contact => {
          return contact.id !== action.payload.data.id;
        });
      })
      .addCase(deleteContact.rejected, errorCallback)
      .addCase(addContact.pending, pendingCallback)
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, errorCallback);
  },
});

export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
