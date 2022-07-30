import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
 firstNumber:number=0;
 secondNumber:number=0;
 result:number=0;
  constructor(private calService:CalculatorService) { }

  ngOnInit(): void {
  }
  add(num1:number, num2:number){
    this.result=this.calService.add(num1,num2);
   }
   sub(num1:number, num2:number){
    this.result=this.calService.sub(num1,num2);
   }
   mul(num1:number, num2:number){
    this.result=this.calService.mul(num1,num2);
   }
   div(num1:number, num2:number){
    this.result=this.calService.div(num1,num2);
   }
   reset(){
    this.result=0;
    this.firstNumber=0;
    this.secondNumber=0;
   }
}
