import { IPostsServices } from './posts-service';
import { IPost } from './posts';

export class NewsFeed {
  constructor(private _service: IPostsServices) {}

  show() {
    this._service.getAll().then((posts: IPost[]) => {
      posts.forEach(post => {
        console.log(`${post.title} - ${post.author}`);
      });
    });
  }
}