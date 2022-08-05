import { Component, OnInit } from '@angular/core';
import { CartDataBahaivourService } from './shared/cart-data-bahaivour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularApp2';
  cartTotalItems:any=[];
  totalItems:any;
  constructor(private cartDataBahaivourService:CartDataBahaivourService){

  }
  ngOnInit() {
    this.cartDataBahaivourService.getCartTotalItems().subscribe(
      resp=>{
        this.cartTotalItems=resp;
        this.totalItems=this.cartTotalItems.length;
      }
    );
  }
}
