import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyGridDisplayComponent } from './my-grid-display/my-grid-display.component';
import {FormsModule} from "@angular/forms";
import { MyCardComponent } from './my-card/my-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridDisplayComponent,
    MyCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
