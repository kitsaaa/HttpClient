import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  submit(f: NgForm) {
    console.log(f)
  }

}
