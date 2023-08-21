import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articles: Article[] = [
    {
      id: 1,
      titre: 'Mon Premier Article',
      contenu: 'Contenu de mon premier article...',
      auteur: 'Auteur 1',
    },
    {
      id: 2,
      titre: 'Deuxième Article',
      contenu: 'Contenu de mon deuxième article...',
      auteur: 'Auteur 2',
    },
    // Ajoutez d'autres articles ici
  ];

  getArticles() {
    return this.articles;
  }

  getArticleById(id: number){
    return  this.articles.find((article) => article.id === id)
  }


  constructor() { }
}
