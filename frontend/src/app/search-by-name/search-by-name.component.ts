import { Component } from '@angular/core';
import {PostService} from "../service/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent {

  result:any = [];
  name:any = "";

  constructor(private postService : PostService,
              private snackbar: MatSnackBar) {}

  searchByName(){
    this.postService.searchByName(this.name).subscribe(res=>{
      this.result = res;
      console.log(this.result);
    },error=>{
      this.snackbar.open("Something Went wrong !","ok");
    })
  }

}
