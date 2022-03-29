import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'form2', component: Form2Component},
  {path: 'employee', component: EmployeeComponent},
  {path: 'xyz', component: XyzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
