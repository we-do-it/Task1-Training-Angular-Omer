import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }
  @Input() transactionValue: number | undefined;
  @Input() isIncreased: boolean| undefined;
  

  ngOnInit(): void {

  }

}
