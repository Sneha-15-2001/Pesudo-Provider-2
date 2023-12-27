import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthnavbarModule } from './authnavbar/authnavbar.module';
import { ActivationComponent } from './activation/activation.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginemailComponent } from './loginemail/loginemail.component';
import { LoginotpComponent } from './loginotp/loginotp.component';
import { AdminnavbarModule } from './adminnavbar/adminnavbar.module';
import { RegisternewsimComponent } from './registernewsim/registernewsim.component';

import { PlanPipe } from './plan.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisternewsimComponent,
    ActivationComponent,
    HomeComponent,
    LogincomponentComponent,
    LoginemailComponent,
    LoginotpComponent,
   // This is where you declare your PlanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthnavbarModule,
    AdminnavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

