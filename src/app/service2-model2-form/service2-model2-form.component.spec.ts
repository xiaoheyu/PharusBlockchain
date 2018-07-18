import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2Model2FormComponent } from './service2-model2-form.component';

describe('Service2Model2FormComponent', () => {
  let component: Service2Model2FormComponent;
  let fixture: ComponentFixture<Service2Model2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service2Model2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service2Model2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
