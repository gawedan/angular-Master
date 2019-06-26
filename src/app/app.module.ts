import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'profiles', component:ProfilesComponent},
  {path:'profile/:id', component:UserprofileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilesComponent,
    NavbarComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
