import { Component } from '@angular/core';
import { Newsim } from '../module/newsim';
import { ServiceService } from '../service/service.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registernewsim',
  templateUrl: './registernewsim.component.html',
  styleUrls: ['./registernewsim.component.css']
})
export class RegisternewsimComponent {
  user = {
    firstName: '',
    lastName: '',
    dob: '',
    emailAddress: '',
    loginPassword: '',
    userSimDetails: [
      {
        address: '',
        location: '',
        noofsims: 0,
      },
    ],
  };
message:any;
  constructor(private eservice: ServiceService) {}


  // onSubmit() {
  //   this.eservice.submitUserData(this.user).subscribe(
  //     (response) => {
  //       console.log('Form submitted successfully', response);
  //       this.message = response.message; // Assign the message from the response
  //       if (this.message === 'Register Successfully') {
  //         // Do something when the message is 'Register Successfully'
  //         console.log('Registration successful!');
        
  //         this.eservice.getEmail(this.user.emailAddress).subscribe();
  //       }
  //     },
  //     (error) => {
  //       console.error('Error submitting form', error);
  //       this.message = 'Error occurred during registration'; // Assign an error message
  //     }
  //   );
  // }





  onSubmit() {
    this.eservice.submitUserData(this.user).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        const orderId = response.orderId; 
  
        if (orderId) {
          console.log('Registration successful! Order ID:', orderId);
  
         
          this.eservice.getEmail(orderId).subscribe(
            (response) => {
              console.log('getEmail method called successfully');
              
              // Extract the message from the response if it exists
              const message = response.message || 'Email Sent Successfully!!';
          
            
              Swal.fire({
                title: 'Success!',
                text: message,
                icon: 'success',
              });
            },
            (error) => {
              console.error('Error calling getEmail method', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error submitting form', error);
        // Handle the error
      }
    );
  }

















  addSimDetails() {
    // Add a new userSimDetails object to the user
    this.user.userSimDetails.push({
      address: '',
      location: '',
      noofsims: 0,
    });
  }

  removeSimDetails(index: number) {
    // Remove a userSimDetails object from the user
    this.user.userSimDetails.splice(index, 1);
  }}