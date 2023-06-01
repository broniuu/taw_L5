import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public post = {
    title: '',
    image: '',
    text: '',
  };

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save() {
    this.dataService.createOrUpdate(this.post).subscribe(() => {
      this.router.navigate(['/blog'])
    })
  }

}
