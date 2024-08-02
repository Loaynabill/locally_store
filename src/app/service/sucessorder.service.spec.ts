import { TestBed } from '@angular/core/testing';

import { SucessorderService } from './sucessorder.service';

describe('SucessorderService', () => {
  let service: SucessorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucessorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
