import { Component } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm=  new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });
}

  


