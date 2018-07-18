import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2Model1FormComponent } from './service2-model1-form.component';

describe('Service2Model1FormComponent', () => {
  let component: Service2Model1FormComponent;
  let fixture: ComponentFixture<Service2Model1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service2Model1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service2Model1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
