import { IExportPostsServices } from './iexport-posts-services';
import { IPost } from './posts';

export class JSONExportServices implements IExportPostsServices {
  export(posts: IPost[]): string {
    return JSON.stringify(posts);
  }
}