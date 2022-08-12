import { configureStore, createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        filter: "",
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        filterContacts: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
    }
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
