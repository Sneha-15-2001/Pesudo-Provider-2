import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authnavbar',
  templateUrl: './authnavbar.component.html',
  styleUrls: ['./authnavbar.component.css']
})
export class AuthnavbarComponent {
  mobile: any; // Define the mobile property

  constructor(public service: AuthserviceService, public sessionService:SessionService,private router:Router) {
    // Retrieve the phone number from localStorage
  
  }


  logout() {   

    console.log('Logout function called');
    this.sessionService.logout();
    console.log(sessionStorage.getItem('phoneNumber'))
    console.log(sessionStorage.getItem('emailAddress'))
    this.router.navigate(['/home']);
    this.service.isLogin=false



    // ... any other logout actions you need to perform
  }
}
