import { Pipe, PipeTransform } from '@angular/core';
//will be used to convert the unit of token balance in accounts
@Pipe({
  name: 'frsConvert'
})
export class FrsConvertPipe implements PipeTransform {

  transform(value: string): string {
    return (Number(value)/Math.pow(10,18)).toFixed(2);
  }

}
