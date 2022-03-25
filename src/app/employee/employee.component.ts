import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';


@Component({
  selector: 'app-employee',
  template: `
    <h2> Employee List </h2>
    <h3 *ngIf="errorMsg">Error: {{errorMsg}}</h3>
    <ul *ngFor = "let employee of employees">
      <li> {{employee.name}} </li>
    </ul>
  `,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: IEmployee[] = [];
  public errorMsg: string = '';
    
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe(
      data => this.employees = data, 
      err => this.errorMsg = 'HTTP error'
    );
  }

}
