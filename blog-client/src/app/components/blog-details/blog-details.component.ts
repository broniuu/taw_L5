import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  public image = '';
  public text?: string;
  public title?: string;
  public id?: string | undefined;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: string | null;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
        this.dataService.getById(id).subscribe((res: any) => {
          this.image = res['image'];
          this.text = res['text'];
          this.title = res['title'];
        });
      });
  }
}
