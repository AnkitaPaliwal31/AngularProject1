import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBehaviorService {
  productList:string[]=['TV','Mobile','Car','Door'];
  private behaSubj=new BehaviorSubject(this.productList);
  obs=this.behaSubj.asObservable();
  constructor() { }
  addProductToList(data:any){
  this.behaSubj.next(data);
  }
  removeLastProductToList(data:any){
    this.behaSubj.next(data);
    }
}
