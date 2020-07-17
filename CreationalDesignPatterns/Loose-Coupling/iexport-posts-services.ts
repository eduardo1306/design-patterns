import { IPost } from './posts';

export interface IExportPostsServices {
  export(post: IPost[]): string;
}