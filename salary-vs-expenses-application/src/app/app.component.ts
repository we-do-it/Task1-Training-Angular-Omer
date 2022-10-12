import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'salary-vs-expenses-application';

  salary:number = 0;

  inputValue:number = 0;

  increase(){
    this.salary += this.inputValue;
    console.log(this.salary);
  }
  decrease(){
    this.salary -=this.inputValue;
  }

}
