import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

  goDetail() {
    this.router.navigateByUrl('signupDetail');
  }
}
