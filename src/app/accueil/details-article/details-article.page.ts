import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/article.model';
import { ArticlesService } from 'src/app/articles.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.page.html',
  styleUrls: ['./details-article.page.scss'],
})
export class DetailsArticlePage implements OnInit {

  article : Article = {id: 0, titre: '', contenu: '', auteur: ''}

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) { }

  ionViewWillEnter(){
    const articleId = parseInt(this.route.snapshot.paramMap.get('id')!!);
    if(this.articleService.getArticleById(articleId)!== null)
      this.article = this.articleService.getArticleById(articleId)!;
  }

  ngOnInit() {
  }

}
