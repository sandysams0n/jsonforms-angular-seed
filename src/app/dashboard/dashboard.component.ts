import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class DashboardComponent {
  constructor(private router: Router) {}

  cards = [
    { title: 'IT Dept employee Registration', icon: 'bi-motherboard', route: '/it-dept-form' },
    { title: 'HR Dept employee Registration', icon: 'bi-person-lines-fill', route: '/hr-dept-form' },
    { title: 'View Newly Registered Employees', icon: 'bi-people-fill', route: '/finance-dept-form'},
    { title: 'View All Employees', icon: 'bi-people', route: '/view-all-employees' }
    // Add more cards as needed
  ];

  formNavigation(department: string) {
    // if (department.toLowerCase() === 'it') {
      this.router.navigate([department]);
    // }
    // Add more department routes as needed
  }
}
