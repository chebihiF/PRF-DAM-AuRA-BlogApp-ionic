import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  },

  {
    path: 'tabs',
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
