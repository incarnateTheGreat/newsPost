import { TestBed, inject } from '@angular/core/testing';

import { GetArticleDataService } from './get-article-data.service';

describe('GetArticleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetArticleDataService]
    });
  });

  it('should be created', inject([GetArticleDataService], (service: GetArticleDataService) => {
    expect(service).toBeTruthy();
  }));
});
