import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1Model1FormComponent } from './service1-model1-form.component';

describe('Service1Model1FormComponent', () => {
  let component: Service1Model1FormComponent;
  let fixture: ComponentFixture<Service1Model1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service1Model1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service1Model1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
