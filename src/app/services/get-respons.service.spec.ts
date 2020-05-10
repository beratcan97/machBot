import { TestBed } from '@angular/core/testing';

import { GetResponsService } from './get-respons.service';

describe('GetResponsService', () => {
  let service: GetResponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetResponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
