import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  submitted:boolean=false;
  isEdit:boolean=false;
  id:any;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private employeesService:EmployeesService,
      private location:Location
  ) {}

  ngOnInit() {
     this.id=this.route.snapshot.params['id'];
    if(this.id){
      this.employeesService.getEmployeeById(this.id).subscribe(resp=>
        {
          this.userForm.patchValue(resp);
        });
    }
  }
  
  userForm = this.formBuilder.group({
    id:['',Validators.required],
    name:['',Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    salary:[''],
    age:[''],
    address:['']
});

  get f() { return this.userForm.controls; }
  onSubmit(){
    this.submitted=true;
    if(this.id){
      this.employeesService.editEmployee(this.userForm.value).subscribe(
        resp=>{
          this.submitted=false;
         this.router.navigate(['/employees']);
        }
      );
    }else{    
    this.employeesService.saveEmployee(this.userForm.value).subscribe(
      resp=>{
        this.submitted=false;
        resp;
        this.router.navigate(['/employees']);
      }
    );
    }
  }
back(){
  this.location.back();
}
}
