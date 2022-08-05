import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {path:'',component:EmployeesComponent},
  {path:':id',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
