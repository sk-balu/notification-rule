import { TestBed } from '@angular/core/testing';

import { ConventionsService } from './conventions.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConventionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [ ConventionsService ]
  }));

  it('should be created', () => {
    const service: ConventionsService = TestBed.get(ConventionsService);
    expect(service).toBeTruthy();
  });
});
