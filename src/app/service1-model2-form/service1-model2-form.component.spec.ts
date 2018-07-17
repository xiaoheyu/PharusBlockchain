import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1Model2FormComponent } from './service1-model2-form.component';

describe('Service1Model2FormComponent', () => {
  let component: Service1Model2FormComponent;
  let fixture: ComponentFixture<Service1Model2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service1Model2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service1Model2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
