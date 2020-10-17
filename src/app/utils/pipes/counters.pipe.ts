import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../patient.model';

@Pipe({
  name: 'counter',
})
export class CountersPipe implements PipeTransform {
  transform(value: Patient[] = [], isRecovered: boolean): number {
    return value.filter((item:Patient) => item.isInRecovered == isRecovered).length;
  }
}
