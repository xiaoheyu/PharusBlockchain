import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4Model2FormComponent } from './service4-model2-form.component';

describe('Service4Model2FormComponent', () => {
  let component: Service4Model2FormComponent;
  let fixture: ComponentFixture<Service4Model2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service4Model2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service4Model2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
