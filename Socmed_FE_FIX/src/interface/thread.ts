import { IUser } from "./user";

export interface IThreadPost {
  content: string;
  image_thread: string | File | undefined;
}

export interface IThreadCard {
  id?: number;
  user?: IUser;
  created_at: string;
  // profile_picture: string;
  // profile_name: string;
  // username: string;
  content?: string;
  image_thread?: string;
  count_like?: number;
  count_replies?: number;
  is_liked?: boolean;
}
