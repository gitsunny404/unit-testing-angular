import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POSTS } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  url : string = "https://jsonplaceholder.typicode.com/posts";

  getPostsService(){
    return this.http.get<POSTS[]>(this.url);
  }

  deletePostsService(id:number){
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${IDBObjectStore}`);
  }
  
}
