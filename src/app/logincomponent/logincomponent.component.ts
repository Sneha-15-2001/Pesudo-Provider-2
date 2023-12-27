import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent {
  phoneNumber: string = '';
  

  constructor(public service:AuthserviceService,private eService:AuthserviceService,private router:Router){}
  requestOTP() {}}
