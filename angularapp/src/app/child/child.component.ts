import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() actualAmount:number=0;
  constructor() { }
  amount:number=0;
  @Output() saveDepositNotify:EventEmitter<number>=new EventEmitter<number>();
  @Output() withdrawalNotify:EventEmitter<number>=new EventEmitter<number>();
  ngOnInit(): void {
  }
saveDeposit(amount:number){
this.actualAmount=this.actualAmount+amount;
this.saveDepositNotify.emit(this.actualAmount);
}
withdraw(amount:number){
  this.actualAmount=this.actualAmount-amount;
  this.withdrawalNotify.emit(this.actualAmount);
  }
}
