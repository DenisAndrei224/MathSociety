import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'Post 1',
      content: 'This is the content of post 1.',
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      title: 'Post 2',
      content: 'This is the content of post 2.',
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    // Add more posts as needed
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
