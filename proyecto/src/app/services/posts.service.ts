import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    return this.http.get<Posts[]>(url);
  }

  getPosts () {
    return this.getQuery('posts');
  }

  getComment(id: string) {
    return this.getQuery(`posts/${id}/comments`);
  }


}
