import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../module/plan';
import { Newsim } from '../module/newsim';
import { TransactionHistory } from '../module/transactionhistory';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  getTransactionHistoryByEmail(emailAddress: string): Observable<TransactionHistory[]> {
    const url = `http://localhost:8039/getTransactionHistoryByEmailAddress?emailAddress=${emailAddress}`;
    return this.http.get<TransactionHistory[]>(url);
  }

  getTransactionHistoryByPhoneNumber(phoneNumber: string): Observable<TransactionHistory[]> {
    const url = `http://localhost:8039/getTransactionHistoryByPhoneNumber?phoneNumber=${phoneNumber}`;
    return this.http.get<TransactionHistory[]>(url);
  }
 
  activatesim(activationCode: string): Observable<any> {
    return this.http.post<any>('http://localhost:8038/payAndActivate', null, {
      params: new HttpParams().set('activationCode', activationCode)
    });}
  getUserDetailsByCode(code: any) {
    return this.http.get<Newsim[]>(`http://localhost:8038/userDataByCode?code=${code}`);
  }

  
  updateWalletBalance(email: string, userDetails: any): Observable<any> {
    const url = `http://localhost:8038/update-wallet/${email}`;
    return this.http.put(url, userDetails);
  }
 
  getPlanDetailsByName(planName: string): Observable<any> {
    console.log(planName);
    const url = `http://localhost:8039/getplansbyname/${planName}`;
    return this.http.get(url);
  }
  getTransactionsByEmail(email: string): Observable<any[]> {
    const url = `http://localhost:8039/transactionemail/${email}`;
    return this.http.get<any[]>(url);
  }

    getTransactionByPhoneNumber(phoneNumber: string): Observable<any> {
      console.log(phoneNumber)
      console.log(this.http.get<any>(`http://localhost:8039/getTransactionByPhoneNumber?phoneNumber=${phoneNumber}`));
      return this.http.get<any>(`http://localhost:8039/getTransactionByPhoneNumber?phoneNumber=${phoneNumber}`);
    
    }
  getUserDataByPhoneNumber(phoneNumber: any) {
    throw new Error('Method not implemented.');
  }
  getUserDataByEmail(emailAddress: string): Observable<Newsim[]> {
    console.log(emailAddress)
    return this.http.get<Newsim[]>(`http://localhost:8038/userDataByEmail?emailAddress=${emailAddress}`);
}
  searchPlansByPrice(price: number): Observable<any[]> {
    console.log(this.http.get<Plan[]>(`http://localhost:8036/pricing-plans?price=${price}`,{responseType:'json'}))
     return this.http.get<Plan[]>(`http://localhost:8039/pricing-plans?price=${price}`);
   }
  getPlans(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8039/getplan');
  }
  
  constructor(private http: HttpClient) { }
}
