import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsArticlePage } from './details-article.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsArticlePageRoutingModule {}
