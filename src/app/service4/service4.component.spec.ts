import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4Component } from './service4.component';

describe('Service4Component', () => {
  let component: Service4Component;
  let fixture: ComponentFixture<Service4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
