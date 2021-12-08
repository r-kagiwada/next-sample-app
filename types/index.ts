
export interface User {
  id: null | number;
  name: null | String;
  username?: null | String;
  email: null | String;
  address?: null | any;
  phone?: null | String;
  website?: null | String;
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