import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }
