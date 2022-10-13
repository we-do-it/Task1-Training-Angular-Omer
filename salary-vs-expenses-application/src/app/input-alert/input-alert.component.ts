import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-alert',
  templateUrl: './input-alert.component.html',
  styleUrls: ['./input-alert.component.css']
})
export class InputAlertComponent implements OnInit {

  constructor() { }
  @Input() isValid!:boolean 

  ngOnInit(): void {
  }

}
