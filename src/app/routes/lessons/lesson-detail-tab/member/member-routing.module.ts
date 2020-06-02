import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberPage } from './member.page';

const routes: Routes = [
  {
    path: '',
    component: MemberPage
  },
  {
    path: 'signup-detail',
    loadChildren: () => import('./signup-detail/signup-detail.module').then( m => m.SignupDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberPageRoutingModule {}
