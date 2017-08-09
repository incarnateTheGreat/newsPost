import { TestBed, inject } from '@angular/core/testing';

import { GetVideoDataService } from './get-video-data.service';

describe('GetVideoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetVideoDataService]
    });
  });

  it('should be created', inject([GetVideoDataService], (service: GetVideoDataService) => {
    expect(service).toBeTruthy();
  }));
});
