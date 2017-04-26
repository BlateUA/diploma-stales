import { TestBed, inject } from '@angular/core/testing';

import { AppWorkerService } from './app-worker.service';

describe('AppWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWorkerService]
    });
  });

  it('should ...', inject([AppWorkerService], (service: AppWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
