import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EmployeesModule { }
