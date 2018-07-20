import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5Model2FormComponent } from './service5-model2-form.component';

describe('Service5Model2FormComponent', () => {
  let component: Service5Model2FormComponent;
  let fixture: ComponentFixture<Service5Model2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service5Model2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service5Model2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
