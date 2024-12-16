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

export interface FormData {
  username: string;
  email: string;
  password: string;
}

export interface LoginResponse {
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
