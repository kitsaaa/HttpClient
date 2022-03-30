import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  userName = new FormControl();
  userEmail = new FormControl();
  userComment = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    const data = {
      userName: this.userName.value,
      userEmail: this.userEmail.value,
      userComment: this.userComment.value
    }
    console.log(data);
  }

}
