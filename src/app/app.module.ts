import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyformsComponent } from './components/myforms/myforms.component';


@NgModule({
   declarations: [
    AppComponent,
    MyformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
 providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
