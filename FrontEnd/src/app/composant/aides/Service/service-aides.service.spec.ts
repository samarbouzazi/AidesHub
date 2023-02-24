import { TestBed } from '@angular/core/testing';

import { ServiceAidesService } from './service-aides.service';

describe('ServiceAidesService', () => {
  let service: ServiceAidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
