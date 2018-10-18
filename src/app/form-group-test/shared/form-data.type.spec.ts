import { TestBed, inject } from '@angular/core/testing';

import { FormData } from './form-data.type';

describe('FormDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormData]
    });
  });

  it('should be created', inject([FormData], (service: FormData) => {
    expect(service).toBeTruthy();
  }));
});
