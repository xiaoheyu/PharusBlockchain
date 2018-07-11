import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edi2Component } from './edi2.component';

describe('Edi2Component', () => {
  let component: Edi2Component;
  let fixture: ComponentFixture<Edi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
