import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {


  @Input() salary!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
