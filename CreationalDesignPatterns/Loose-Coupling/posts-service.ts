import { IPost } from './posts';
import { IExportPostsServices } from './iexport-posts-services';

export interface IPostsServices {
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;
  // export(posts: IPost[]): Promise<string>;
}

export default class PostsServices implements IPostsServices {
  private _posts: IPost[] = [];
  constructor() {
    this._posts = [
      {
        id: 4,
        title: 'Instagram is awesome',
        body: 'Something important',
        author: 'Mark Zuckerberg',
      },
      {
        id: 5,
        title: 'Netflix is awesome',
        body: 'Something important',
        author: 'Reed Hastings',
      },
      {
        id: 6,
        title: 'Google is awesome',
        body: 'Something important',
        author: 'Larry Page',
      }      
    ]
  }
  getAll(): Promise<IPost[]> {
    return Promise.resolve(this._posts);
  }
  save(post: IPost): Promise<void> {
    this._posts.push(post);
    return Promise.resolve();    
  }
  export(service: IExportPostsServices): Promise<string> {
    return this.getAll().then(posts => service.export(posts));
  } 
}