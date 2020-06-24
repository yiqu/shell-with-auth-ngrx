import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthUserAlreadyLoggedInGuard } from '../shared/route-guards/verified-user.guard';
import { CoreComponent } from './core.component';
import { NoVerifiedUserChildrenGuard, NoVerifiedUserGuard } from '../shared/route-guards/no-user.guard';

const routes: Routes = [
  { path: '', component: CoreComponent, canActivate: [NoVerifiedUserGuard] }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
