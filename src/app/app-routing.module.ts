import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItDeptFormComponent } from './it-dept-form/it-dept-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'it-dept-form', component: ItDeptFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
