import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList',
  standalone: false
})
export class OrderListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
