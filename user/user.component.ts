import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
  submitted= false;
  user ={
    email: '',
    password: '',
  };
  @ViewChild('f') signupForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  Onsubmit( ){
     this.submitted =true;
    this.user.email= this.signupForm.form.value.userData.email;
    this.user.password= this.signupForm.form.value.userData.secret;
  }
}



