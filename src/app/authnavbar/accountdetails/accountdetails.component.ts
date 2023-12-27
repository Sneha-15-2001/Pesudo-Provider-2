import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { SessionService } from 'src/app/service/session.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {
 

    mobile: any;
    emailAddress: any;
    users: any;
  
    constructor(private sessionservice: SessionService, private userService: UserserviceService) {
     console.log(sessionservice.getEmail())
     sessionStorage.getItem("emailAddress");
    }
  
   
    ngOnInit() {
      this.mobile =sessionStorage.getItem("phoneNumber");
      
      this.emailAddress = sessionStorage.getItem("emailAddress");
      console.log(this.emailAddress);
      console.log(this.mobile);
      // this.userService.getUserData().subscribe((data: Newsim[]) => {
      //   this.users = data;
      //   console.log(this.users);
      // });
  
      // Determine whether the user logged in with email or phone number
      if (this.emailAddress) {
        // User logged in with email, fetch user data by email
        this.userService.getUserDataByEmail(this.emailAddress).subscribe((data) => {
          
            this.users=data;
            console.log(data);
          },
          (error) => {
           
            console.error(error);
          }
        );
      } 
  }
}
