import { createAsyncThunk } from '@reduxjs/toolkit';
import { authSelectors } from './authSelectors';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

const register = createAsyncThunk(
  'auth/register', async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosBaseUrl.post('/auth/register', credentials);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if (status === 400) {
         Notify.failure("Please, check your entered data!");
      }
      if (status === 409) {
         Notify.failure(data.message);
      }
      if (status === 500) {
        Notify.failure("Oops, something wrong on our server :( Please, try again");
      }
      return rejectWithValue({ data, status });
    }
  }
      // Check if user already submit form

      // const dataUser = thunkAPI.getState().dailyRate.dataUser;
      // const userID = data.user.id;
      // if (thunkAPI.getState().dailyRate.dataUser) {
      //   await axiosBaseUrl.post(`/daily-rate/${userID}`, dataUser);
      //   return data;
      // }
);

const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  const { email, password } = credentials;
  try {
    const { data } = await axiosBaseUrl.post('/auth/login', {
      email,
      password,
    });
    return data;
  } catch (error) {
    const { data, status } = error.response;
    if (status === 400) {
      Notify.failure("Please, check your entered data!");
    }
    if (status === 401) {
      Notify.failure(data.message);
    }
    if (status === 500) {
      Notify.failure("Oops, something wrong on our server :( Please, try again");
    }
    return rejectWithValue({ data, status });
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosBaseUrl.post('/auth/logout');
    token.unset();
  } catch (e) {
    Notify.failure(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const refreshToken = authSelectors.refreshToken(thunkAPI.getState());
  const sid = authSelectors.sid(thunkAPI.getState());

  if (refreshToken === null) return thunkAPI.rejectWithValue(`No token`);
  token.set(refreshToken);

  try {
    const { data: refreshData } = await axiosBaseUrl.post('/auth/refresh', {
      sid,
    });
    token.set(refreshData.newAccessToken);
    const { data: userData } = await axiosBaseUrl.get('/user');
    return { refreshData, userData };
  } catch (e) {
    Notify.failure(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
};

export default authOperations;