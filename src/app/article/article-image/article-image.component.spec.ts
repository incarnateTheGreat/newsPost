import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImageComponent } from './article-image.component';

describe('ArticleImageComponent', () => {
  let component: ArticleImageComponent;
  let fixture: ComponentFixture<ArticleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
