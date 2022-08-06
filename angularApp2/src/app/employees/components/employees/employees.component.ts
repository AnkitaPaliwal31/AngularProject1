import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

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
    constructor(private empService:EmployeesService,
      private router:Router) { }
  
    ngOnInit(): void {
      this.getEmployees();
    }
    getEmployees(){
      // this.empService.getEmployees().subscribe(
      //   (resp)=>{this.employees= resp});
      this.employees$=this.empService.getEmployees();
    }
    addEmployee(){
      this.router.navigate(['/employees/add']);
    }
    edit(id:number){
      this.router.navigate(['employees/edit',id]);
    }
    delete(id:number){
     this.empService.deleteEmployee(id).subscribe(resp=>
      {
        resp;
        this.getEmployees();
      });
    }

}
