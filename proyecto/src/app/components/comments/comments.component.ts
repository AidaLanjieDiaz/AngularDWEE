import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = []; 
  
  

  constructor(
   private activatedRoute: ActivatedRoute,
   private postsService: PostsService
  ) {
    this.activatedRoute.params.subscribe ((params) => {
      this.postsService.getComment(params['id']).subscribe((data: any) => {
        this.comments = data;
      });
    });
  }

  ngOnInit(): void {
  }
}
