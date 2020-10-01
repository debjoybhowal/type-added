import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
})
export class CountersPipe implements PipeTransform {
  transform(value: any[] = [], isRecovered: boolean): number {
    return value.filter((item) => item.isInRecovered == isRecovered).length;
  }
}
