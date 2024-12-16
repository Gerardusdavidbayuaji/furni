import axiosWithConfig from "../axiosWithConfig";
import { RegisterSchema } from ".";
import { LoginResponse, LoginSchema } from "./type";

export const loginAccount = async (
  data: LoginSchema
): Promise<LoginResponse> => {
  try {
    const response = await axiosWithConfig.post("/auth/local", data);
    return response.data as LoginResponse;
  } catch (error: any) {
    throw Error(error.response.data.message || "Failed to login");
  }
};

export const registerAccount = async (data: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post("/auth/local/register", data);
    return response.data;
  } catch (error: any) {
    throw Error(error.response?.data?.message || "Failed to register");
  }
};
