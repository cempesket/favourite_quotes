import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(object: any, type, order) {
    if (order === 'desc') {
      if (type === 'date') {
        return object.sort((a, b) => b.created - a.created)
      } else {
        return object.sort((a, b) => b - a)
      }
    } else if (order === 'asc') {
      if (type === 'date') {
        return object.sort((a, b) => a.created - b.created)
      } else {
        return object.sort((a, b) => a - b)
      }
    }
  }
}
