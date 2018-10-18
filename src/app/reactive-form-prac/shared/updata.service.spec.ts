import { TestBed, inject } from '@angular/core/testing';

import { UpdataService } from './updata.service';

describe('UpdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdataService]
    });
  });

  it('should be created', inject([UpdataService], (service: UpdataService) => {
    expect(service).toBeTruthy();
  }));
});
