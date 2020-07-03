const posts = [
  {
    "id": 1,
    "title": "Facebook",
    "description": "Facebook is awesome",
    "author": "Mark Zuckenberg",
  },
  {
    "id": 2,
    "title": "Apple",
    "description": "Apple is awesome",
    "author": "Steve Jobs",
  },
  {
    "id": 3,
    "title": "Linux",
    "description": "Linux is awesome",
    "author": "Linus Torivs",
  },
]

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;  
}

interface IPostServices {
  getAll(): Post[];  
}

class PostServices implements IPostServices {
  private _posts = posts;
  constructor() {}

  getAll(): Post[] {
    return this._posts;
  }  
}

class NewsFeed {  
  constructor(private _service: IPostServices) {    
  }

  show() {
    const posts = this._service.getAll();
    posts.map(post => {
      console.log(`${post.title} - ${post.author}`)
    })    
  }
}

const newsFeed = new NewsFeed(new PostServices());
newsFeed.show();
