import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableDirective } from './directives/smart-table.directive';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    SmartTableDirective,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[SmartTableDirective,SearchPipe]
})
export class SharedModule { }
