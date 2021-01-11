import { TestBed, inject } from '@angular/core/testing';

import { RepositionService } from './reposition.service';

describe('RepositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositionService]
    });
  });

  it('should be created', inject([RepositionService], (service: RepositionService) => {
    expect(service).toBeTruthy();
  }));
});
