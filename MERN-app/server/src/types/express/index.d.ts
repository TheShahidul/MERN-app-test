declare namespace Express {
  export interface User {
    id: string;
    username: string;
    shops: string[];
  }

  export interface Request {
    user?: User;
  }
}
