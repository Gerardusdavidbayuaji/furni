import { z } from "zod";

export interface IUserState {
  user: { id: number; username: string; email: string; token: string } | null;
}

export interface SuccessResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ErrorResponse {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details?: {
      errors?: {
        path: string[];
        message: string;
        name: string;
      }[];
    };
  };
}

export const loginSchema = z.object({
  identifier: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(6, { message: "Password is required" }),
});

export const registerSchema = z.object({
  username: z.string().min(6, { message: "Username is required" }).max(20),
  email: z.string().min(1, { message: "Email is Reqired" }),
  password: z.string().min(6, { message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
