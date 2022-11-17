import {
  createSlice,
  PayloadAction,
  ThunkDispatch,
  Dispatch,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface UserSlice {
  token: string | null;
  error: string | null;
}

type Credentials = {
  username: string;
  password: string;
};

type CustomThunkDispatch = ThunkDispatch<
  {
    user: UserSlice;
  },
  undefined,
  any
> &
  Dispatch<any>;

const initialState: UserSlice = {
  token: sessionStorage.getItem('token'),
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, setError } = userSlice.actions;

export default userSlice.reducer;

export function logout() {
  return async (dispatch: CustomThunkDispatch) => {
    sessionStorage.removeItem('token');
    dispatch(setToken(null));
  };
}

export function authenticate({ username, password }: Credentials) {
  return async (dispatch: CustomThunkDispatch) => {
    dispatch(setError(null));
    await axios({
      url: 'http://localhost:3001/auth',
      method: 'POST',
      data: { username, password },
      //headers: {
      //authorization: 'your token comes here',
      //},
    })
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        dispatch(setToken(res.data.token));
      })
      .catch((err) => {
        dispatch(setError(err.response.data.message));
      });
  };
}
