import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
    contacts: [],
    filter: ""
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, { payload }) {
            state.contacts.push(payload);
        },
        deleteContact(state, { payload }) {
            state.contacts = state.contacts.filter(item => item.id !== payload);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const persistContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer,
);

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;