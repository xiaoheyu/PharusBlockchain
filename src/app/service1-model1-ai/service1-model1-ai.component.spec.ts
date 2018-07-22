import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1Model1AiComponent } from './service1-model1-ai.component';

describe('Service1Model1AiComponent', () => {
  let component: Service1Model1AiComponent;
  let fixture: ComponentFixture<Service1Model1AiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service1Model1AiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service1Model1AiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
