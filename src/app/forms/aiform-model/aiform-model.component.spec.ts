import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiformModelComponent } from './aiform-model.component';

describe('AiformModelComponent', () => {
  let component: AiformModelComponent;
  let fixture: ComponentFixture<AiformModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiformModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiformModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
