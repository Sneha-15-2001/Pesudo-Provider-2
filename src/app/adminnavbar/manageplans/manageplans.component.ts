import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Plan } from 'src/app/module/plan';

import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-manageplans',
  templateUrl: './manageplans.component.html',
  styleUrls: ['./manageplans.component.css']
})
export class ManageplansComponent {

 

plans: Plan[] = [];

constructor(private adminservice: AdminService, private router: Router) {}


  ngOnInit() {
    this.adminservice.getPlans().subscribe((data: any) => {
      this.plans = data;
    });
  }


fetchPlans() {
 
    // In a real application, you would fetch plans from a service or API.
    // For this example, let's create some dummy data.
    // this.plans = [
    //   {
    //     id: 1,
    //     name: 'Basic Plan',
    //     planPrice: 10,
    //     data: 5,
    //     messagesPerDay: 100,
    //     validity: 30,
    //     features: ['Feature A', 'Feature B'],
    //   },
    //   {
    //     id: 2,
    //     name: 'Pro Plan',
    //     planPrice: 20,
    //     data: 10,
    //     messagesPerDay: 200,
    //     validity: 60,
    //     features: ['Feature A', 'Feature B', 'Feature C'],
    //   },
    //   // Add more dummy plans as needed
    // ];
  }


editPlan(id: number) {
  this.router.navigate(['/edit-plan', id]);
}

deletePlan(planId: number) {
  if (confirm('Are you sure you want to delete this plan?')) {
    this.adminservice.deletePlan(planId).subscribe(
      () => {
        // Plan deleted successfully, update your plans array
        this.plans = this.plans.filter((plan) => plan.id !== planId);
      },
      (error) => {
        console.error('Error deleting plan:', error);
        // Handle error
      }
    );
  }
}
navigateToCreatePlan() {
   this.router.navigate(['/create-plan']);
}
}