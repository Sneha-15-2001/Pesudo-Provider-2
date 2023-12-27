import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { ActivationComponent } from './activation/activation.component';
import { HomeComponent } from './home/home.component';
import { LoginemailComponent } from './loginemail/loginemail.component';
import { NotificationComponent } from './authnavbar/notification/notification.component';
import { LoginotpComponent } from './loginotp/loginotp.component';
import { AuthnavbarModule } from './authnavbar/authnavbar.module';
import { AdminnavbarModule } from './adminnavbar/adminnavbar.module';
import { RegisternewsimComponent } from './registernewsim/registernewsim.component';

const routes: Routes = [{
  path:'login',
  component:LogincomponentComponent
},{
  path:'activate',
  component:ActivationComponent
  },
{
  path:'register',
  component:RegisternewsimComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'loginemail',
  component:LoginemailComponent
},
{
  path:'notification',
  component:NotificationComponent
},
{
  path:'login/loginotp',
  component:LoginotpComponent
},
{
  path:'',
  component:HomeComponent
},
{
  path:'auth',
  loadChildren:()=>AuthnavbarModule
},{
  
    path:'admin',
    loadChildren:()=>AdminnavbarModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
