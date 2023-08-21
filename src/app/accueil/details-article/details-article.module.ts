import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsArticlePageRoutingModule } from './details-article-routing.module';

import { DetailsArticlePage } from './details-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsArticlePageRoutingModule
  ],
  declarations: [DetailsArticlePage]
})
export class DetailsArticlePageModule {}
