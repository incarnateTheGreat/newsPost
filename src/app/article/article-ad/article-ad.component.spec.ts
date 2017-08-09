import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdComponent } from './article-ad.component';

describe('ArticleAdComponent', () => {
  let component: ArticleAdComponent;
  let fixture: ComponentFixture<ArticleAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
