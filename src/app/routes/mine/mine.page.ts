import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  exit() {
    this.router.navigateByUrl('login');
  }
}
