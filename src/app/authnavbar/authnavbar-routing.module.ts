import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PaymentstatusComponent } from './paymentstatus/paymentstatus.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowseplansComponent } from './browseplans/browseplans.component';
import { FronthomeComponent } from './fronthome/fronthome.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { CurrentplanComponent } from './currentplan/currentplan.component';
import { RechargehistoryComponent } from './rechargehistory/rechargehistory.component';

const routes: Routes = [ {
  path:'loginhome',
  component:FronthomeComponent
},
{
  path:'browseplans',
  component:BrowseplansComponent
},{
  path:'payment/:id',
  component:PaymentComponent
},
{
  path: 'paymentgateway/:id/:mobile',
  component:PaymentgatewayComponent
},{
  path:'paymentstatus/:phoneNumber',
  component:PaymentstatusComponent
},
{
  path: 'myaccount',
  component:MyaccountComponent,
  children: [
   
    { path: 'accountdetails', component: AccountdetailsComponent },
    {path:'currentplan',component:CurrentplanComponent},
    {  path:'rechargehistory',component:RechargehistoryComponent},
    // Add other routes for MyAccountNavBar options if needed
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthnavbarRoutingModule { }
