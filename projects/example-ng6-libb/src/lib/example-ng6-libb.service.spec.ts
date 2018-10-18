import { TestBed, inject } from '@angular/core/testing';

import { ExampleNg6LibbService } from './example-ng6-libb.service';

describe('ExampleNg6LibbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleNg6LibbService]
    });
  });

  it('should be created', inject([ExampleNg6LibbService], (service: ExampleNg6LibbService) => {
    expect(service).toBeTruthy();
  }));
});
