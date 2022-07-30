import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
query:string="";
employees:any=[];
  constructor(private empService:EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.employees= this.empService.getEmployees();
  }
}
