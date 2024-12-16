import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserState, LoginResponse } from "../apis/user";

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginResponse>) => {
      state.user = {
        id: action.payload.user.id,
        username: action.payload.user.username,
        email: action.payload.user.email,
        token: action.payload.jwt,
      };
      localStorage.setItem("user", JSON.stringify(state.user));
      console.log(action.payload);
    },

    logoutUser: (state) => {
      state.user = null;
      console.log("logout");
      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
