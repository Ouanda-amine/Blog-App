import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private  http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get("http://localhost:3000/posts")
  }
  createPost(data : any):Observable<any> {
    return this.http.post("http://localhost:3000/posts",data)
  }
}
