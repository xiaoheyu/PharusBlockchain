import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDIComponent } from './edi.component';

describe('EDIComponent', () => {
  let component: EDIComponent;
  let fixture: ComponentFixture<EDIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
