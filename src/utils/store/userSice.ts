import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../apis/user";

const initialState: IUserState = {
  user: { username: "glup" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: () => {
      console.log("login");
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
