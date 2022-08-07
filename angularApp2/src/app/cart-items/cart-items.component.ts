import { Component, OnInit } from '@angular/core';
import { CartDataBahaivourService } from '../shared/services/cart-data-behavior.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
 cartItems:any=[];
 totalCartItems:number=0;
 totalAmount:number=0;
  constructor(private cartDataBahaivourService:CartDataBahaivourService) { }

  ngOnInit(): void {
    this.cartDataBahaivourService.getCartTotalItems().subscribe(resp=>{
      this.cartItems=resp;
      this.totalCartItems=resp.length;
    });
    
    this.totalAmount=this.cartItems.reduce((sum:number, current:any) => sum + current.price, 0);
  }
  addItem(product:any){
    this.cartDataBahaivourService.addProductToCart(product);
  }
  deleteItem(product:any){
   this.cartDataBahaivourService.removeProductFromCart(product);
  }
  deleteAll(){
    this.cartItems=[];
    this.totalCartItems=0;
    this.totalAmount=0;
  }
}
