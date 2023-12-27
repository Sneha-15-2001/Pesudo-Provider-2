import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/module/transaction';
import { ServiceService } from 'src/app/service/service.service';
import { SessionService } from 'src/app/service/session.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-currentplan',
  templateUrl: './currentplan.component.html',
  styleUrls: ['./currentplan.component.css']
})
export class CurrentplanComponent implements OnInit {
  emailAddress: any;
  currentDateTime = new Date();
  nextDayDate: any;
  userDetails: any;
  addingFunds: boolean = false;
  fundAmount: number = 0;
  phoneNumber: any;
  planDetails: any;
  transactionDetails: any;
  nextdayformat: any;
  formattedDate: any;

  constructor(private sessionservice: SessionService, private userService: UserserviceService) {
    this.phoneNumber = sessionStorage.getItem("phoneNumber");
    this.emailAddress = sessionStorage.getItem("emailAddress");
    console.log(this.phoneNumber);
    console.log(this.emailAddress);
    const datePipe = new DatePipe('en-US');
    this.nextDayDate = new Date(this.currentDateTime);
    this.nextDayDate.setDate(this.currentDateTime.getDate() + 1);
    this.nextDayDate.setHours(2, 30, 0, 0);
    this.formattedDate = datePipe.transform(this.nextDayDate, 'MMM dd, yyyy hh:mm a');
    this.nextDayDate = new Date(this.currentDateTime);
    this.nextDayDate.setDate(this.currentDateTime.getDate() + 1);
    this.nextDayDate.setHours(0, 0, 0, 0);
    this.nextdayformat = datePipe.transform(this.nextDayDate, 'MMM dd, yyyy hh:mm a');
  }

  ngOnInit() {
    this.retrieveUserDetails();
  }

  retrieveUserDetails() {
    this.emailAddress = sessionStorage.getItem("emailAddress");
    console.log(this.emailAddress);

    if (this.emailAddress) {
      this.userService.getUserDataByEmail(this.emailAddress).subscribe((data) => {
        this.userDetails = data;
        console.log(data);
        this.userService.getTransactionsByEmail(this.emailAddress).subscribe((res) => {
          this.transactionDetails = res;
          console.log(this.transactionDetails);
          this.fetchPlanDetailsForTransactions();
        });
      },
        (error) => {
          console.error(error);
        }
      );
    }
    // User logged in with phone number, fetch user data by phone number
  }

  fetchPlanDetailsForTransactions() {
    for (const transaction of this.transactionDetails) {
      this.userService.getPlanDetailsByName(transaction.planName).subscribe((planDetails) => {
        transaction.planDetails = planDetails;
        console.log(transaction.planDetails);
      });
    }
  }

  addFunds() {
    console.log(this.fundAmount);
    const email = this.userDetails.emailAddress;
    this.userDetails.wallet = this.userDetails.wallet + this.fundAmount;
    console.log(this.userDetails);
    this.userService.updateWalletBalance(email, this.userDetails).subscribe(response => {
      console.log('Wallet updated successfully:', response);
      this.fundAmount = 0;
      this.addingFunds = false;
    }, error => {
      console.error('Error updating wallet:', error);
    });
  }
}
