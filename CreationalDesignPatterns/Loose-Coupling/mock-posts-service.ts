import { IPostsServices } from './posts-service';
import { IPost } from './posts';
import { IExportPostsServices } from './iexport-posts-services';

export class MockPostServices implements IPostsServices {
  posts: IPost[] = [];

  constructor() {
    this.posts = [
      {
        id: 1, 
        title: 'Facebook is awesome!' ,
        body: 'Something important',
        author: 'Mark Zuckerberg',
      },
      {
        id: 2, 
        title: 'Microsoft is awesome!' ,
        body: 'Something important',
        author: 'Bill Gates',
      },
      {
        id: 3, 
        title: 'Linux is awesome!' ,
        body: 'Something important',
        author: 'Linus Torvalds',
      },
    ]
  }  
  getAll(): Promise<IPost[]> {
    return Promise.resolve(this.posts);
  }

  save(post: IPost): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();    
  }
  
  export(service: IExportPostsServices): Promise<string> {
    return this.getAll().then(posts => service.export(posts));
  }

}