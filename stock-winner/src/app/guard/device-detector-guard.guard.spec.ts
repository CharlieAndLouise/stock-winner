import { TestBed, async, inject } from '@angular/core/testing';

import { DeviceDetectorGuard } from './device-detector.guard';

describe('DeviceDetectorGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceDetectorGuard]
    });
  });

  it('should ...', inject([DeviceDetectorGuard], (guard: DeviceDetectorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
