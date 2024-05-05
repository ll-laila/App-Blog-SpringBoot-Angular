import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements  OnInit{

  allPosts: any;

  constructor(private postService: PostService,
  private snackBar: MatSnackBar) {}

  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts() {
     this.postService.getAllPosts().subscribe(res=>{
         console.log(res);
         this.allPosts = res;
    },error=>{
      this.snackBar.open("Something went wrong !","ok");
    })
  }

 /* likePost(){
    this.postService.putLike(this.postId).subscribe((response)=>{
      this.matSnackBar.open("Post Liked successfully","ok");
      this.getPostById();
    },(error)=>{
      this.matSnackBar.open("Something Went wrong !","ok");
    })
  }*/

}
