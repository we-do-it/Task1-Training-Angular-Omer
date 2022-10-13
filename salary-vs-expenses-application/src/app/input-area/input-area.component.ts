import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {


  inputValue:number = 0;
  isValid: boolean = true;
  @Output() increaseEvent = new EventEmitter<number>();
  @Output() decreaseEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    if(this.checkInputValidation(this.inputValue)){
      this.isValid = true;
      this.increaseEvent.emit(this.inputValue);
    }else{
      this.isValid = false;
    }
 
  }

  decrease(){
    if(this.checkInputValidation(this.inputValue)){
      this.isValid = true;
      this.decreaseEvent.emit(this.inputValue);
    }else{
      this.isValid = false;
    }
  }
  checkInputValidation(input: number){
    return input !==null;
  }
}
