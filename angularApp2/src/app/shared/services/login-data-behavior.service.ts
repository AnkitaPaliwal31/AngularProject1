import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataBehaviorService {
  public isLoggedIn=new BehaviorSubject<boolean>(false);
    constructor() { }
    getLoginDetails(){
     return this.isLoggedIn.asObservable();
    }
    setLoginData(value:boolean){
      this.isLoggedIn.next(value);
    }
}
