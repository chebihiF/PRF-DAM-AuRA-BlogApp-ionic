import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage
  },
  {
    path: ':id',
    loadChildren: () => import('./details-article/details-article.module').then( m => m.DetailsArticlePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
