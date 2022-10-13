import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  salary: number = 0;
  isIncreased?: boolean;
  transactionValue?: number;
  constructor() { }

  ngOnInit(): void {
  }

  increase(income:number){
    this.isIncreased = true;
    this.transactionValue = income;
    this.salary += income;
  }
  decrease(outcome:number){
    this.isIncreased = false;
    this.transactionValue = outcome;
    this.salary -= outcome;
  }

}
