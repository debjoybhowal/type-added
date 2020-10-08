import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any[], query:String): any[] {
    return value.filter(item=>{
      return item.name.toLowerCase().search(query.toLowerCase())>=0;
    })
    
  }

}
