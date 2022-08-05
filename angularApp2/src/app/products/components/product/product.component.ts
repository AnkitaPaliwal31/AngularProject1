import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Location } from '@angular/common';
import { CartDataBahaivourService } from 'src/app/shared/cart-data-bahaivour.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
product:any={};
  constructor(private activatedRoute:ActivatedRoute,
    private location:Location,
    private productsService:ProductsService,
    private cartDataBahaivourService:CartDataBahaivourService) { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    this.productsService.getProductDetails(id).subscribe(resp=>
      {
        this.product=resp;
      })
  }
  addToCard(id:number){
    this.cartDataBahaivourService.addProductToCart(id);
  }
  back(){
    this.location.back();
  }
}
