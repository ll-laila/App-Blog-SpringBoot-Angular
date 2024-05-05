import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:9090/';


@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  createNewPoste(data : any): Observable<any> {
    return this.httpClient.post(apiUrl + "api/posts" , data);
  }


  getAllPosts(): Observable<any> {
    return this.httpClient.get(apiUrl + "api/posts");
  }

  getPostById(postId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `api/posts/${postId}` );
  }

  putLike(postId : number): Observable<any> {
    return this.httpClient.put(apiUrl + `api/posts/${postId}/like`,{});
  }

  searchByName(name : String): Observable<any> {
    return this.httpClient.get(apiUrl + `api/posts/search/${name}` );
  }

}
