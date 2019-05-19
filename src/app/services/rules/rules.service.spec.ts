import { TestBed } from '@angular/core/testing';

import { RulesService } from './rules.service';
import { HttpClientModule } from '@angular/common/http';

describe('RulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [ RulesService ]
  }));

  it('should be created', () => {
    const service: RulesService = TestBed.get(RulesService);
    expect(service).toBeTruthy();
  });
});
