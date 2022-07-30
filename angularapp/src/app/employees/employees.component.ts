import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
query:string="";
employees:any=[];
employees$:Observable<any> | undefined;
errMessage:string='';
  constructor(private empService:EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    // this.empService.getEmployees().subscribe(
    //   (resp)=>{this.employees= resp});
    this.employees$=this.empService.getEmployees();
  }
}
