import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from "../../services/data.service";




@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements AfterViewInit {

  @ViewChild('input', { static: true }) input?: ElementRef<HTMLElement> | any;
  public posts$: any;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event['target'].value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe((results: any) => {
      this.posts$ = results;
    });
  }
}
