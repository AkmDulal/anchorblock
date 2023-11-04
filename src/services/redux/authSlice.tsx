import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Api";
import { toast } from "react-toastify";

interface AuthState {
  msg: string;
  user: string;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

interface SignUpData {
  email: string;
  password: string;
}


export const signUpUser = createAsyncThunk("signUpUser", async (body: SignUpData) => {
    try {
      const response = await axios.post("https://reqres.in/api/register", body);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data.error || "An error occurred");
    }
  });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = action.payload.msg;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = "";
        localStorage.setItem('token', state.token);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message || "An error occurred";
        toast.error(`${state.error}`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      });
  },
});
export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
