import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { CartDataBahaivourService } from './shared/services/cart-data-behavior.service';
import { LoginDataBehaviorService } from './shared/services/login-data-behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularApp2';
  totalItems:any;
  isLoggedIn:boolean=false;
  constructor(private cartDataBahaivourService:CartDataBahaivourService,
    private loginDataBehaviorService:LoginDataBehaviorService,
    private authService:AuthService,
    private router:Router) { }

    ngOnInit(): void {
   this.loginDataBehaviorService.getLoginDetails().subscribe(resp=>
      {
        this.isLoggedIn=resp;
      });
    this.cartDataBahaivourService.getCartTotalItems().subscribe(
      resp=>{
        this.totalItems=resp.length;
      }
    );
  }
  logout(){  
    this.authService.logout();
    this.loginDataBehaviorService.setLoginData(false);
    this.router.navigate(['/login']);
  }
}
