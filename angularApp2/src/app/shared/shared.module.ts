import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableDirective } from './directives/smart-table.directive';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    SmartTableDirective,
    SearchPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[SmartTableDirective,SearchPipe,SortPipe]
})
export class SharedModule { }
