
export interface User {
  id: number;
  name: string;
  username?: null | string;
  email: string;
  address?: null | any;
  phone?: null | string;
  website?: null | string;
  company?: null | any;
};

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface TodoItem {
  id: string;
  message: string;
  done: boolean;
};