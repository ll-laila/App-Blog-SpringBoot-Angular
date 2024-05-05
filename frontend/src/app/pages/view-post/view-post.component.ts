import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit{

  postId = this.activatedRoute.snapshot.params['id'];
  postData:any;
  comments:any;

  commentForm: FormGroup | undefined;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar,
              private fb: FormBuilder,
              private commentService: CommentService
              ) {}


  ngOnInit(){
    console.log(this.postId);
    this.getPostById();

    this.commentForm = this.fb.group({
        postId: [null, Validators.required],
        content: [null, Validators.required]
    })
  }

  publishComment(){
    // @ts-ignore
    const postedBy = this.commentForm.get("postedBy")?.value;
    // @ts-ignore
    const content = this.commentForm.get("content")?.value;

      this.commentService.createComment(this.postId, postedBy,content).subscribe( res=>{
      this.matSnackBar.open("Comment added successfully","ok");
      this.getCommentsByPost();
    },error=>{
      this.matSnackBar.open("Something Went wrong !","ok");
    })

  }


  getCommentsByPost(){
      this.commentService.getAllCommentByPost(this.postId).subscribe(res=>{
        this.comments = res;
      },error=>{
        this.matSnackBar.open("Something Went wrong !","ok");
      })

  }



  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
         this.postData = res;
         console.log(res);
         this.getCommentsByPost();
    },error=>{
      this.matSnackBar.open("Something Went wrong !","ok");
    })
  }

  likePost(){
    this.postService.putLike(this.postId).subscribe((response)=>{
      this.matSnackBar.open("Post Liked successfully","ok");
      this.getPostById();
    },(error)=>{
      this.matSnackBar.open("Something Went wrong !","ok");
    })
  }



}
