import {Component, EventEmitter, OnInit, Output} from
    '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText?: string;

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter();
    });
  }


  sendFilter() {
    this.router.navigate(['/blog'], {
      queryParams: {
        name:
        this.filterText
      }
    });

    this.name.emit(this.filterText);
  }
}
