import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl = 'http://localhost:9090/';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  createComment(postId:number, postedBy: string, content: string) :Observable<any>{
        const params = {
          postId: postId,
          postedBy: postedBy
        }

        return this.httpClient.post<any>(apiUrl +  `api/comments/create`, content , {params});
  }



  getAllCommentByPost(postId: number): Observable<any>{
      return this.httpClient.get(apiUrl +  `api/comments/${postId}`);
  }


}
