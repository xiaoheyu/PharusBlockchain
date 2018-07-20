import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3Model1FormComponent } from './service3-model1-form.component';

describe('Service3Model1FormComponent', () => {
  let component: Service3Model1FormComponent;
  let fixture: ComponentFixture<Service3Model1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service3Model1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service3Model1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
