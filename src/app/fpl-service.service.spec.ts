/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FplServiceService } from './fpl-service.service';

describe('Service: FplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FplServiceService]
    });
  });

  it('should ...', inject([FplServiceService], (service: FplServiceService) => {
    expect(service).toBeTruthy();
  }));
});
