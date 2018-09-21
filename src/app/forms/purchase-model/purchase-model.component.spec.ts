import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseModelComponent } from './purchase-model.component';

describe('PurchaseModelComponent', () => {
  let component: PurchaseModelComponent;
  let fixture: ComponentFixture<PurchaseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
