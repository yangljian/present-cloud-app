import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lessons',
    loadChildren: () => import('./routes/lessons/lessons.module').then( m => m.LessonsPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./routes/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'mine',
    loadChildren: () => import('./routes/mine/mine.module').then( m => m.MinePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./routes/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./routes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./routes/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'validate',
    loadChildren: () => import('./routes/common/validatecode/validate/validate.module').then( m => m.ValidatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
