import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { SearchPipe } from './pipes/search.pipe';
import { SmartTableDirective } from './directives/smart-table.directive';
import { SortPipe } from './pipes/sort.pipe';
import { HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PropertyBindingComponent,
    CalculatorComponent,
    EmployeesComponent,
    AttributeDirComponent,
    SearchPipe,
    SmartTableDirective,
    SortPipe,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
