import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  add(post: Post) {
    return this.http.post(this.url + '/api/posts', post);
  }
}
