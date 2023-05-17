import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() filterText: string = '';
  public items$: any
  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe(response => {
      this.items$ = response
    });
  }

  protected readonly filter = filter;
}
