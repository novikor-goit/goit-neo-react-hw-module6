import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]
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
