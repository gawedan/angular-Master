import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KhaledComponent } from './components/khaled/khaled.component';

@NgModule({
   declarations: [
    AppComponent,
    KhaledComponent
  ],
  imports: [
    BrowserModule
    ],
 providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
