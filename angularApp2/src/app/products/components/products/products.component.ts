import { Component, OnInit } from '@angular/core';
import { CartDataBahaivourService } from 'src/app/shared/services/cart-data-behavior.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products:any=[];
query:string="";
  constructor(private productsService:ProductsService,private cartDataBahaivourService:CartDataBahaivourService) { }

  ngOnInit(): void {
    this.getProducts();
  }
getProducts(){
  this.productsService.getProducts().subscribe(resp=>{
    this.products=resp;
  });
}
addToCard(id:number){
  this.cartDataBahaivourService.addProductToCart(id);
}
}
