import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'salary-vs-expenses-application';

  styleAlerts?:string;

  salary:number = 0;

  inputValue:number = 0;

  checkValidation:boolean = true;

  checkUpdateSalary: boolean = true;

  isIncreased?:boolean;

  transactionValue?:number;

  handleTransaction(isIncreased:boolean){
    if(this.checkValidationForm(this.inputValue)){
      this.transactionValue = this.inputValue;
      this.checkValidation = true;
      this.checkUpdateSalary = false;
      if(isIncreased){
        this.salary += this.inputValue;
        this.isIncreased = true;
        this.styleAlerts = 'flex place-content-center mt-5 bg-green-100  border border-green-400 text-green-700 px-4 py-3 rounded';
      }else{
        this.salary -=this.inputValue;
        this.isIncreased = false;
        this.styleAlerts = 'flex place-content-center mt-5 bg-red-100  border border-red-400 text-red-700 px-4 py-3 rounded';
      }
    }else this.checkValidation = false;

  }

  checkValidationForm(intputValue:number | null){
    this.checkUpdateSalary = true;
    return intputValue === null ? false : true;
  }

}
