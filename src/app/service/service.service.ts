import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Newsim } from '../module/newsim';
import { Observable } from 'rxjs';
import { Transaction } from '../module/transaction';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  generateBill(phoneNumber: string): Observable<Map<string, string>> {
    console.log(phoneNumber);
    console.log(this.http.post('http://localhost:8039/generate-bill', phoneNumber ))
    return this.http.post<Map<string, string>>('http://localhost:8039/generate-bill', phoneNumber );
  } 
  


  transactionrechargehistorysave(plantransaction: Transaction):Observable<any> {
    // console.log(plantransaction);
    return this.http.post('http://localhost:8039/transactionssave', plantransaction);
  }
  transactionrecharge(plantransaction: Transaction):Observable<any> {
    
    return this.http.post('http://localhost:8039/transactions', plantransaction);
  }
  getUserDataByPhoneNumber(mobile: any) {
    const request = { mobile };
    console.log(request);
    return this.http.post('http://localhost:8038/sss',request)
  }

  verifyEmailAndPassword(emailAddress: string, loginPassword: string):Observable<any> {
    const request = { emailAddress, loginPassword };
    console.log(request);
    return this.http.post('http://localhost:8038/verify',request)
  }

  getEmail(orderId: string): Observable<any> {
   console.log(orderId);
    const url = `http://localhost:8038/users/send-details-email?orderId=${orderId}`;

    // Make the HTTP GET request
    return this.http.get(url);
  }
   
  submitUserData(userData: any): Observable<any> {
    // Replace 'any' with the actual type of your response from the server
    
    return this.http.post(`http://localhost:8038/create`, userData);

  
}


  constructor(private http:HttpClient) { }

}
