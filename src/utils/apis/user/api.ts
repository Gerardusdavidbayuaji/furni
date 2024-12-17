import {
  LoginSchema,
  RegisterSchema,
  ErrorResponse,
  SuccessResponse,
} from "./type";
import axiosWithConfig from "../axiosWithConfig";

export const loginAccount = async (
  data: LoginSchema
): Promise<SuccessResponse> => {
  try {
    const response = await axiosWithConfig.post("/auth/local", data);

    return response.data as SuccessResponse;
  } catch (error: any) {
    const errorResponse: ErrorResponse = error.response?.data;

    throw errorResponse?.error;
  }
};

export const registerAccount = async (
  data: RegisterSchema
): Promise<SuccessResponse> => {
  try {
    const response = await axiosWithConfig.post("/auth/local/register", data);

    return response.data as SuccessResponse;
  } catch (error: any) {
    const errorResponse: ErrorResponse = error.response?.data;

    throw errorResponse?.error;
  }
};
