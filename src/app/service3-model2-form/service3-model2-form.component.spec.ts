import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3Model2FormComponent } from './service3-model2-form.component';

describe('Service3Model2FormComponent', () => {
  let component: Service3Model2FormComponent;
  let fixture: ComponentFixture<Service3Model2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service3Model2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service3Model2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
