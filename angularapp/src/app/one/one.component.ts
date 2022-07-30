import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from '../services/data-behavior.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
productList:string[]=[];
  constructor(private dataBehavService:DataBehaviorService) { }

  ngOnInit(): void {
    this.dataBehavService.obs.subscribe((resp)=>this.productList=resp);
  }

addProduct(){
this.productList.push('Laptop');
this.dataBehavService.addProductToList(this.productList);
}

}
