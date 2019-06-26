import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataServiceService } from './service/data-service.service';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { HttpModule } from '@angular/http';
import { MyFormComponent } from './components/my-form/my-form.component';
@NgModule({
   declarations: [
    AppComponent,
    MyComponentComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    ],
 providers:[DataServiceService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
