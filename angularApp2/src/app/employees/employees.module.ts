import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeesModule { }
