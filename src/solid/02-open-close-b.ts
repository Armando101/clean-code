import { HttpClient } from "./02-open.close-c";

export class TodoService {
  constructor(private http: HttpClient) {}
  private url = "https://jsonplaceholder.typicode.com/todos/";

  async getTodoItems() {
    const { data } = await this.http.get(this.url);
    return data;
  }
}

export class PostService {
  constructor(private http: HttpClient) {}
  private url = "https://jsonplaceholder.typicode.com/posts";

  async getPosts() {
    const { data } = await this.http.get(this.url);
    return data;
  }
}

export class PhotosService {
  constructor(private http: HttpClient) {}
  private url = "https://jsonplaceholder.typicode.com/photos";

  async getPhotos() {
    const { data } = await this.http.get(this.url);
    return data;
  }
}
