import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedDetails: [],
    website: '',
    username: '',
    password: '',
    isEditing: false,
    editId: null,
    editIndex: null,
  };

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setSavedDetails: (state, action) => {
      state.savedDetails = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    setEditIndex: (state, action) => {
      state.editIndex = action.payload;
    },
  },
});

export const {
    setSavedDetails,
    setWebsite,
    setUsername,
    setPassword,
    setIsEditing,
    setEditId,
    setEditIndex,
} = detailsSlice.actions;

export default detailsSlice.reducer;