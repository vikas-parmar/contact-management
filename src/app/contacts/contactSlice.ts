import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

// Type for the slice state
interface Contact {
  id: string;
  fName: string;
  lName: string;
  isActive: boolean;
}

interface ContactState {
  contacts: Contact[];
}

// Initial State using type
const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    toggleActive: (state, action: PayloadAction<string>) => {
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload
      );
      if (contact) {
        contact.isActive = !contact.isActive;
      }
    },
  },
});

export const { addContact, deleteContact, editContact, toggleActive } =
  contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContact = (state: RootState) => state.contacts.contacts;

export default contactSlice.reducer;
