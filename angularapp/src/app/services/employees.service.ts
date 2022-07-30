import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 url:string="assets/employees.json";
  constructor(private httpClient:HttpClient) { }
  getEmployees(){
    return this.httpClient.get(this.url);
  }
}
