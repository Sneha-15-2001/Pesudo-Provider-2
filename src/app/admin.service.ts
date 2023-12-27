import { Injectable } from '@angular/core';
import { Plan } from './module/plan';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionHistory } from './module/transactionhistory';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getRechargedetails():Observable<TransactionHistory[]> {
    return this.http.get<TransactionHistory[]>(`http://localhost:8039/allTransaction`);
  }
  deletePlan(planId: number): Observable<void> {
    const url = `http://localhost:8039/deleteplan/${planId}`;
    return this.http.delete<void>(url);
  
  }
  
  getPlans(): Observable<Plan[]> {
    return this.http.get<any[]>('http://localhost:8039/getplan',{responseType:'json'});
  }
  updatePlan(plan: Plan): Observable<any> {
    const url = `http://localhost:8039/plans/${plan.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, plan, { headers });
  }
  getPlan(planId: number): Observable<Plan> {
    const url = `http://localhost:8039/plans/${planId}`;

    return this.http.get<Plan>(url);
  }
  constructor(private http:HttpClient){}
  addPlan(planData: Plan): Observable<any> {
    return this.http.post('http://localhost:8039/addplan', planData);
  }
}
