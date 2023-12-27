import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-fronthome',
  templateUrl: './fronthome.component.html',
  styleUrls: ['./fronthome.component.css']
})
export class FronthomeComponent {
  mobile: any; // Define the mobile property
emailAddress:any;
  constructor(public service: AuthserviceService, public sessionService: SessionService) {
    // // Retrieve the phone number from localStorage
    // this.mobile = sessionStorage.getItem('phoneNumber');
    this.mobile = sessionStorage.getItem('phoneNumber');
    console.log(this.mobile);
  this.emailAddress=sessionStorage.getItem('emailAddress');
  console.log(this.emailAddress);
  }
}
