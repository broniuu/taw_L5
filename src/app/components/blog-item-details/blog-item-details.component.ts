import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit{
  public image: string = '';
  public text: string = '';

  constructor(private service: DataService, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
    })
  }
}
