import { Component } from '@angular/core';
import { POSTS } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {

  constructor(private service1 : PostsService){}

  posts : POSTS[] = [];

  getPosts(){
    this.service1.getPostsService().subscribe( (data : POSTS[]) => {
      console.log("Data fetching ...");
      this.posts = data;
    });
    
  }
}
