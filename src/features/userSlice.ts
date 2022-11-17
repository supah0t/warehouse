import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserSlice {
  token: string | null;
}

const initialState: UserSlice = {
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
