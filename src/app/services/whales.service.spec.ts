import { TestBed } from '@angular/core/testing';

import { WhalesService } from './whales.service';

describe('WhalesService', () => {
  let service: WhalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
