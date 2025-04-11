import { TestBed } from '@angular/core/testing';

import { TotalumService } from './totalum.service';

describe('TotalumService', () => {
  let service: TotalumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
