import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 imageUrl:string="assets/E-commerce-51017.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
