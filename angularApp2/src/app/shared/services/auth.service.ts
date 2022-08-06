import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject=new BehaviorSubject<any>({});
  public currentUser=new Observable<any>();
  url:string='http://localhost:3000/Employees';
  users=[{
    userName:'',
    password:''
  }];

    constructor(private http: HttpClient) {
       let data=localStorage.getItem('currentUser');
       if(data!=null){
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(data));
        this.currentUser = this.currentUserSubject.asObservable();
       }
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username:string, password:string) {
        return this.http.get<any>(this.url)
            .pipe(map(users => {
              this.users=users;
              let user=this.users.filter(user=>user.userName==username && user.password==password);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
