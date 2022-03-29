import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { XyzComponent } from './xyz/xyz.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    XyzComponent,
    FormComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
