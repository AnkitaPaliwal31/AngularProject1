import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url:string="http://localhost:3000/Employees";
  constructor(private httpClient:HttpClient) { }
  getEmployees(){
    return this.httpClient.get(this.url);
  }
  getEmployeeById(id:number){
    return this.httpClient.get(this.url +'/'+ id);
  }
  deleteEmployee(id:number){
    return this.httpClient.delete(this.url +'/'+ id);
  }
  saveEmployee(data:any){
   return this.httpClient.post(this.url,data);
  }
  editEmployee(data:any){
    return this.httpClient.put(this.url+'/'+data.id,data);
   }
}
