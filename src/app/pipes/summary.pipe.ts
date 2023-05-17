import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string | undefined, limit: any): any {
    if (!value) {
      return null;
    }
    return value.substring(0, limit) + '...'
  }

}
