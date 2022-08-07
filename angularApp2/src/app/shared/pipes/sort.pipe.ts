import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(list: any[], selectedOption: string,
    value:string="",sortBy:boolean=false): any[] {
      if(selectedOption=='Sort by Name Asc'){
        value='title';
        sortBy=true;
      }else if(selectedOption=='Sort by Name Desc'){
        value='title';
        sortBy=false;
      }else if(selectedOption=='Sort by Price Asc'){
        value='price';
        sortBy=true;
      }else if(selectedOption=='Sort by Price Desc'){
        value='price';
        sortBy=false;
      }
    if (!list)
      return [];
      if(value){
        if (sortBy)   list.sort((a, b) => a[value] > b[value] ? -1 : 1); 
    else 
    list.sort((a, b) => a[value] > b[value] ? 1 : -1);    
    }
    return list;
  }

}
