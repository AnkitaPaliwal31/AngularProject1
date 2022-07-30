import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployees(){
    return [{
      id:101,
      name:'Max',
      age:28,
      address:'Mumbai',
      salary:700000
    },
    {
      id:102,
      name:'John',
      age:28,
      address:'Pune',
      salary:900000
    },
    {
      id:103,
      name:'Clark',
      age:29,
      address:'Mumbai',
      salary:100000
    },
    {
      id:104,
      name:'Kelly',
      age:32,
      address:'Ohio',
      salary:800000
    },{
      id:105,
      name:'Kim',
      age:28,
      address:'Florida',
      salary:960000
    }];
  }
}
