import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'timeDif'
})
export class TimeDifPipe implements PipeTransform {
  transform(date: Date) {
    if (date) {
      const now = new Date();
      return (now.getHours() - date.getHours()).toFixed()
    }
  }
}
