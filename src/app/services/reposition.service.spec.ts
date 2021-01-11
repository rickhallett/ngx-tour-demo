import { TestBed, inject } from '@angular/core/testing';

import { RepositionPopupService } from './reposition-popup.service';

describe('RepositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositionPopupService]
    });
  });

  it('should be created', inject([RepositionPopupService], (service: RepositionPopupService) => {
    expect(service).toBeTruthy();
  }));
});
