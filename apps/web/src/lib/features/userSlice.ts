import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserState {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  contact: string;
  address: string;
  roleId: number;
}

const initialState: UserState = {
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  username: '',
  contact: '',
  address: '',
  roleId: 0,
};

export const userSlice = createSlice({
  name: 'user',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.username = action.payload.username;
      state.contact = action.payload.contact;
      state.address = action.payload.address;
      state.roleId = action.payload.roleId;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.email = '';
      state.first_name = '';
      state.last_name = '';
      state.username = '';
      state.contact = '';
      state.address = '';
      state.roleId = 0;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
