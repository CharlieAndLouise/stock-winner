import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityTokenComponent } from './identity-token.component';

describe('IdentityTokenComponent', () => {
  let component: IdentityTokenComponent;
  let fixture: ComponentFixture<IdentityTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
