import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { UserSimDetails } from 'src/app/module/newsim';
import { Plan } from 'src/app/module/plan';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { SessionService } from 'src/app/service/session.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  mobile: any; // Define the mobile property
  emailAddress:any;
  planId:any;
  plandetail:any;
  currentTime: Date;
  users:any;
  phoneNumbers: string[] = []; // Array to store phone numbers


  constructor(private router:Router,private route: ActivatedRoute,private eservice:AdminService,public service: AuthserviceService, public sessionService: SessionService,public userservice:UserserviceService) {
    this.currentTime = new Date();

    this.mobile = sessionStorage.getItem('phoneNumber');
    // console.log(this.mobile);
  this.emailAddress=sessionStorage.getItem('emailAddress');
  console.log(this.emailAddress);
  
  }

   
  
  ngOnInit():void{
    console.log(this.mobile);
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  
    this.route.params.subscribe((params) => {

      this.planId = params['id'];
      
      console.log(this.planId);
      this.eservice.getPlan(this.planId).subscribe((planDetails) => {
        // Assuming you get plan details in the response
        this.plandetail=planDetails;
        console.log('Plan Details:', planDetails);});


  });  if (this.emailAddress !== null) {
    this.userservice.getUserDataByEmail(this.emailAddress).subscribe((data) => {
        
      this.users = data;
    
      this.phoneNumbers = this.extractPhoneNumbers(this.users.userSimDetails);
      console.log(this.mobile);
      console.log(data);
      console.log(this.phoneNumbers)
    },
    (error) => {
     
      console.error(error);
    }
  );}

}
extractPhoneNumbers(userSimDetails: UserSimDetails[]): string[] {
  let phoneNumbers: string[] = [];
  for (const details of userSimDetails) {
    for (const simData of details.simData) {
      phoneNumbers.push(simData.phonenumber);
    }
  }
  return phoneNumbers;
}
onMobileNumberChange() {
  console.log('Selected Mobile Number:', this.mobile);
}


  payNow(plandetail: Plan) {
    const url = `/paymentgateway/${plandetail.id}/${this.mobile}`;
    // Implement your payment processing logic here
    // You can connect to a payment gateway or perform any desired payment processing steps
    console.log('Processing recharge for:', plandetail);
    this.router.navigate([url]);
  }
}