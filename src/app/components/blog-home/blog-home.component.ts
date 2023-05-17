import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent {
  public filterText: string = '';

  getName($event: string): void {
    this.filterText = $event;
  }
}
