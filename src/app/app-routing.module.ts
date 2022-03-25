import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'xyz', component: XyzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
