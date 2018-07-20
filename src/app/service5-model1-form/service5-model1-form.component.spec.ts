import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5Model1FormComponent } from './service5-model1-form.component';

describe('Service5Model1FormComponent', () => {
  let component: Service5Model1FormComponent;
  let fixture: ComponentFixture<Service5Model1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service5Model1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service5Model1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
