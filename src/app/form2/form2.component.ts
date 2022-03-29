import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  userName: string = '';
  userEmail: string = '';
  userComment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    const data = {
      username: this.userName,
      email: this.userEmail,
      comment: this.userComment
    }

    console.log(data);
  }

}
