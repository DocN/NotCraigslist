import { TestBed, inject } from '@angular/core/testing';

import { RandomIdserviceService } from './random-idservice.service';

describe('RandomIdserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomIdserviceService]
    });
  });

  it('should be created', inject([RandomIdserviceService], (service: RandomIdserviceService) => {
    expect(service).toBeTruthy();
  }));
});
