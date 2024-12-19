import { loginAccount, registerAccount } from "./api";
import {
  SuccessResponse,
  RegisterSchema,
  LoginSchema,
  ErrorResponse,
  IUserState,
} from "./type";

export { loginAccount, registerAccount };
export type {
  SuccessResponse,
  ErrorResponse,
  IUserState,
  RegisterSchema,
  LoginSchema,
};
