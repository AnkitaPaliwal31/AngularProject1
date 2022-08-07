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
selectedOption:string='Please Select';

  constructor(private productsService:ProductsService,private cartDataBahaivourService:CartDataBahaivourService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  sortByOptions=['Please Select','Sort by Name Asc','Sort by Name Desc','Sort by Price Asc','Sort by Price Desc'];
 
getProducts(){
  this.productsService.getProducts().subscribe(resp=>{
    this.products=resp;
  });
}
addToCard(product:any){
  this.cartDataBahaivourService.addProductToCart(product);
}
}
