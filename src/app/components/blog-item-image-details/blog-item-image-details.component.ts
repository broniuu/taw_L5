import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog-item-image-details',
  templateUrl: './blog-item-image-details.component.html',
  styleUrls: ['./blog-item-image-details.component.css']
})
export class BlogItemImageDetailsComponent {
  public image: string = 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
  public text: string = 'Tytuł';
}
