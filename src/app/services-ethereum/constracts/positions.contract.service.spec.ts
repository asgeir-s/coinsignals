import { TestBed, inject } from '@angular/core/testing';

import { PositionsContractService } from './positions.contract.service';

describe('SignalsContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionsContractService]
    });
  });

  it('should be created', inject([PositionsContractService], (service: PositionsContractService) => {
    expect(service).toBeTruthy();
  }));
});
