import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../assets/mock-data';

@Pipe({
  name: 'sortList',
  standalone: true,
  pure: false
})
export class SortListPipe implements PipeTransform {

  transform(arr: Product[], prop: string): Product[] {
    arr.sort((a: any, b: any) => {
      if(a[prop] > b[prop]){
        return 1;
      } else if(a[prop] < b[prop]){
        return -1;
      } else {
        return 0;
      }
    })
    console.log(arr);
    return arr;
  }

}
