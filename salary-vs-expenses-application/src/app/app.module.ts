import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { ContentComponent } from './content/content.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { BudgetComponent } from './budget/budget.component';
import { InputAlertComponent } from './input-alert/input-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    ContentComponent,
    InputAreaComponent,
    BudgetComponent,
    InputAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
