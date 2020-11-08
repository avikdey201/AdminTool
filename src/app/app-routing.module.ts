import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindetailsComponentComponent } from './admindetails-component/admindetails-component.component'

const appRoutes: Routes = [
  { path: '', component: AdmindetailsComponentComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
