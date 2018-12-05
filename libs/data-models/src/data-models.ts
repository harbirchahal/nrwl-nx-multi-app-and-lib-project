export interface Authenticate {
  username: string;
  password: string;
}

export interface User {
  id: number;
  token: string;
  role: string;
}
