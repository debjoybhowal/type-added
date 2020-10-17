import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../patient.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: Patient[], query:String): Patient[] {
    return value.filter((item:Patient)=>{
      return item.name.toLowerCase().search(query.toLowerCase())>=0;
    })
    
  }

}
