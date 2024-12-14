import { redirect } from "react-router-dom";
import axiosWithConfig from "../axiosWithConfig";

export const registerAccount = async () => {
  try {
    const response = await axiosWithConfig.post("/auth/local/register");
  } catch (error) {}
};
