import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compt1Component } from './compt1/compt1.component';
import { Asynccompt2Component } from './asynccompt2/asynccompt2.component';

@NgModule({
  declarations: [
    AppComponent,
    Compt1Component,
    Asynccompt2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
