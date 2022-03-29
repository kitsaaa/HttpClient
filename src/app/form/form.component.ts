import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log('clicked')
  }

}
