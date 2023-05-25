import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Post} from "../../models/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  public post: Post = new Post("","","");

  constructor(private dataService: DataService, private router: Router) {
  }

  addPost() {
    this.dataService.add(this.post).subscribe(result => {
      this.router.navigate(['/']);
    });
  }
}
