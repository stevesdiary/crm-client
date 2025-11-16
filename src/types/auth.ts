export interface User {
  id: string;
  email: string;
  fullName: string;
  tenantId: string;
  role: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface SignupData {
  email: string;
  password: string;
  fullName: string;
}