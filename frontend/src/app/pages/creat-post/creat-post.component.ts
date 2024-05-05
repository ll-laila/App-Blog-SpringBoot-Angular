import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import {PostService} from "../../service/post.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.css']
})
export class CreatPostComponent implements OnInit{

  postForm: FormGroup | undefined;

  constructor(private fb:FormBuilder,
              private router: Router,
            private snackBar: MatSnackBar,
              private postService: PostService) {
  }

  ngOnInit(){
        this.postForm = this.fb.group({
          name: [null, Validators.required],
          content: [null, [Validators.required, Validators.maxLength(5000)]],
          img: [null, Validators.required],
          postedBy: [null, Validators.required],
          tags: [null, Validators.required]
        })
  }


  createPost() {
     // @ts-ignore
    const data = this.postForm.value;

    this.postService.createNewPoste(data).subscribe(res=>{
        this.snackBar.open("Post created  sucessfully ","ok");
        this.router.navigateByUrl("/");
    },error=>{
      this.snackBar.open("Something went wrong !","ok");
    })
  }


}
