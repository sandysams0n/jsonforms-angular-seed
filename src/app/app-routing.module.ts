import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItDeptFormComponent } from './it-dept-form/it-dept-form.component';
import { NewEmployeeDataComponent } from './new-employee-data/new-employee-data.component';
import { ViewAllEmployeesComponent } from './view-all-employees/view-all-employees.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'it-dept-form', component: ItDeptFormComponent },
  { path: 'new-user', component: NewEmployeeDataComponent },
  { path: 'view-all-employees', component: ViewAllEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
