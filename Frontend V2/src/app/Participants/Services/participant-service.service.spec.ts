import { TestBed } from '@angular/core/testing';

import { ParticipantServiceService } from './participant-service.service';

describe('ParticipantServiceService', () => {
  let service: ParticipantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
