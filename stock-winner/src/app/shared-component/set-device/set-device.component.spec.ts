import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDeviceComponent } from './set-device.component';

describe('SetDeviceComponent', () => {
  let component: SetDeviceComponent;
  let fixture: ComponentFixture<SetDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
