import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    name: '',
    pwd: ''
  };
  isPass = '';
  stuInf: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('register');
  }
  nextStep() {
    this.router.navigateByUrl('validateCode');
  }
  register() {
    this.router.navigateByUrl('validateCode');
  }
}
