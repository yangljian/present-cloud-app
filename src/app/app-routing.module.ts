import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MaxLengthValidator } from '@angular/forms';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./routes/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./routes/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'validate',
    loadChildren: () => import('./routes/common/validatecode/validate/validate.module').then( m => m.ValidatePageModule)
  },
  {
    path: 'validateLogin',
    loadChildren: () => import('./routes/login/validate-login/validate-login.module').then( m => m.ValidateLoginPageModule)
  },
  {
    path: 'addLesson',
    loadChildren: () => import('./routes/lessons/add-lesson/add-lesson.module').then( m => m.AddLessonPageModule)
  },
  {
    path: 'joinLesson',
    loadChildren: () => import('./routes/lessons/join-lesson/join-lesson.module').then( m => m.JoinLessonPageModule)
  },
  {
    path: 'lesson-detail-tabs',
    loadChildren: () => import('./routes/lessons/lesson-detail-tab/lesson-detail-tab.module').then( m => m.LessonDetailTabPageModule)
  },
  {
    path: 'addHomework',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./routes/lessons/lesson-detail-tab/homework/add-homework/add-homework.module').then( m => m.AddHomeworkPageModule)
  }
  ,
  {
    path: 'score',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./routes/lessons/lesson-detail-tab/homework/homework-detail/score/score.module').then( m => m.ScorePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
