import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedOption:string='Please Select';
  products= [
    {
      id: 1,
      name: "iPhone 9",
      desc: "An apple mobile which is nothing like apple",
      price: 58900,
      image: 'https://shop.unicornstore.in/uploads/images/medium/23a96e5796fcc4fc3578f109953b2e2f.png'
    },
    {
      id: 2,
      name: "Samsung",
      desc: "A samsung mobile which is an android phone",
      price: 19900,
      image: 'https://m.media-amazon.com/images/I/91W42b8YW+L._SX679_.jpg'
    },
    {
      id: 3,
      name: "Redmi",
      desc: "A redmi mobile which is an android phone",
      price: 11499,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/41NNWAx-XQL._SX300_SY300_QL70_FMwebp_.jpg'
    }
  ];
  sortByOptions=['Please Select','Sort by Name Asc','Sort by Name Desc','Sort by Price Asc','Sort by Price Desc'];
  constructor() { }

  ngOnInit(): void {
  }

}
