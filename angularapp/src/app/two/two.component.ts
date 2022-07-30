import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from '../services/data-behavior.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  productList:string[]=[];
  constructor(private dataBehavService:DataBehaviorService) { }

  ngOnInit(): void {
    this.dataBehavService.obs.subscribe((resp)=>this.productList=resp);
  }
  removeLastProduct(){
    this.productList.pop();
    this.dataBehavService.removeLastProductToList(this.productList);
  }
}
