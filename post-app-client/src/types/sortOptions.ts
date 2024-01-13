import { IPost } from './postInterface';

export interface ISortOptions {
  text: string;
  value: keyof IPost;
}
