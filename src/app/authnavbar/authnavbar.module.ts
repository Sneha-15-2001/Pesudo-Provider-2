import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthnavbarRoutingModule } from './authnavbar-routing.module';
import { AuthnavbarComponent } from './authnavbar.component';
import { AccountcardComponent } from './accountcard/accountcard.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { BrowseplansComponent } from './browseplans/browseplans.component';
import { CurrentplanComponent } from './currentplan/currentplan.component';
import { FronthomeComponent } from './fronthome/fronthome.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NotificationComponent } from './notification/notification.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { PaymentstatusComponent } from './paymentstatus/paymentstatus.component';
import { PricingcardComponent } from './pricingcard/pricingcard.component';
import { RechargehistoryComponent } from './rechargehistory/rechargehistory.component';
import { FormsModule } from '@angular/forms';
import { PlanPipe } from '../plan.pipe';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AuthnavbarComponent,
    AccountcardComponent,
    AccountdetailsComponent,
    BrowseplansComponent,
    CurrentplanComponent,
    FronthomeComponent,
    MyaccountComponent,
    NotificationComponent,
    PaymentComponent,
    PaymentgatewayComponent,
    PaymentstatusComponent,
    PricingcardComponent,
    RechargehistoryComponent,  PlanPipe,

  ],
  imports: [
    CommonModule,
    AuthnavbarRoutingModule,FormsModule,DataTablesModule
  ], exports:[AuthnavbarRoutingModule,AuthnavbarComponent,MyaccountComponent],
})
export class AuthnavbarModule { }
