import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {path:'',component:EmployeesComponent},
  {path:':id',component:EmployeeDetailsComponent},
  {path:'add/:id',component:EmployeeEditComponent},
  {path:'edit/:id',component:EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
