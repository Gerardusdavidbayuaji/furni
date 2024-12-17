export interface IUserState {
  user: { id: number; username: string; email: string; token: string } | null;
}

export interface LoginSchema {
  identifier: string;
  password: string;
}

export interface RegisterSchema {
  username: string;
  email: string;
  password: string;
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
