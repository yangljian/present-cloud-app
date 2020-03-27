import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonListPage } from './lesson-list.page';

describe('LessonListPage', () => {
  let component: LessonListPage;
  let fixture: ComponentFixture<LessonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
