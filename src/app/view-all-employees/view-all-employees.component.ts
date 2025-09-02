import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

@Component({
  selector: 'app-view-all-employees',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.scss'
})
export class ViewAllEmployeesComponent {

constructor(private appService: AppService){}
users:Employee[] = []

ngOnInit() {
  this.appService.getUsers().subscribe((users: Employee[]) => {
    this.users = users;
  });
}
}
