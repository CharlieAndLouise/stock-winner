import { TestBed, async, inject } from '@angular/core/testing';

import { CheckCredentialGuard } from './check-credential.guard';

describe('CheckCredentialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckCredentialGuard]
    });
  });

  it('should ...', inject([CheckCredentialGuard], (guard: CheckCredentialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
