import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.page.html',
  styleUrls: ['./validate.page.scss'],
})
export class ValidatePage implements OnInit {
  @ViewChild(IonSlides, {static: false})
  slides: IonSlides;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.router.navigateByUrl('register');
  }

  getCode() {
    this.slides.slideNext();
  }

}
