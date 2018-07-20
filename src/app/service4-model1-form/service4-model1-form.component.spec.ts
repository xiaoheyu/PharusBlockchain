import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4Model1FormComponent } from './service4-model1-form.component';

describe('Service4Model1FormComponent', () => {
  let component: Service4Model1FormComponent;
  let fixture: ComponentFixture<Service4Model1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service4Model1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service4Model1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
