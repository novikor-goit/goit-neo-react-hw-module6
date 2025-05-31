import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: []
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: crypto.randomUUID(),
            name,
            number
          }
        };
      }
    },
    deleteContact: (state, { payload: id }) => ({
      ...state,
      items: state.items.filter((contact) => contact.id !== id)
    })
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
