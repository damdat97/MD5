import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User | any;
  constructor() { }

  ngOnInit() {
    this.user = new User('damdat97@gmail.com', '12345', '12345', 'Ha noi', 12,'+84123456789');
  }

  onSubmit() {

  }
}
