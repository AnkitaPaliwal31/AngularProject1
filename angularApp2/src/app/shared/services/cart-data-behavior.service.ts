import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataBahaivourService {
totalItems:any=[];
public productCartList=new BehaviorSubject<any>([]);
  constructor() { }
  getCartTotalItems(){
   return this.productCartList.asObservable();
  }
  addProductToCart(product:any){
    this.totalItems.push(product);
    this.productCartList.next(this.totalItems);
  }
  removeProductFromCart(product:any){
    this.totalItems.pop(product);
  }
  removeAllProductFromCart(product:any){
    this.totalItems=[];
    this.productCartList.next(this.totalItems);
  }
}
