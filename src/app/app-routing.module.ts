import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoVerifiedUserGuard } from './shared/route-guards/no-user.guard';
import { NotFoundComponent } from './404/404.component';
import { NetworkAwarePreloadStrategy } from './shared/preload-strategies/preload-network';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent,
    children:
      [
        { path: "", redirectTo: 'home-sub', pathMatch: 'full' },
        { path: "home-sub", component: HomeComponent },
      ]
  },
  { path: 'core',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  { path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  },
  { path: 'my-account',
    loadChildren: () => import('./my-account/my.module').then(m => m.MyAccountModule)
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {preloadingStrategy: NetworkAwarePreloadStrategy,}
    )
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
