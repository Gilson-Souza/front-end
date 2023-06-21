import { TestBed } from '@angular/core/testing';

import { CandidatoResolver } from './candidato.resolver';

describe('CandidatoResolver', () => {
  let resolver: CandidatoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CandidatoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
