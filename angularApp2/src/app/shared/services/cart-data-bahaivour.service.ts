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
  addProductToCart(id:number){
    this.totalItems.push(id);
    this.productCartList.next(this.totalItems);
  }
}
