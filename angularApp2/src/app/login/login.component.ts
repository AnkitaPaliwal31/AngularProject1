import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { LoginDataBehaviorService } from '../shared/services/login-data-behavior.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string='';

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private loginDataBehaviorService:LoginDataBehaviorService
  ) {
      // redirect to home if already logged in
      if (this.authService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(data:any){
     this.authService.login(data.userName,data.password)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              });
  }
  
}
