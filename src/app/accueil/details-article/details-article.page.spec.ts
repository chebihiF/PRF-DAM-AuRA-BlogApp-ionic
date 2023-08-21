import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsArticlePage } from './details-article.page';

describe('DetailsArticlePage', () => {
  let component: DetailsArticlePage;
  let fixture: ComponentFixture<DetailsArticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
