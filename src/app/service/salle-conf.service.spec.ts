import { TestBed } from '@angular/core/testing';

import { SalleConfService } from './salle-conf.service';

describe('SalleConfService', () => {
  let service: SalleConfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleConfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
