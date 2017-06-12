import { TestBed, inject } from '@angular/core/testing';

import { SignalsContractService } from './signals.contract.service';

describe('SignalsContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalsContractService]
    });
  });

  it('should be created', inject([SignalsContractService], (service: SignalsContractService) => {
    expect(service).toBeTruthy();
  }));
});
