import { TestBed, inject } from '@angular/core/testing';

import { AimodelService } from './aimodel.service';

describe('AimodelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AimodelService]
    });
  });

  it('should be created', inject([AimodelService], (service: AimodelService) => {
    expect(service).toBeTruthy();
  }));
});
