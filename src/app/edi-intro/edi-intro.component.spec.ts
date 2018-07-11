import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiIntroComponent } from './edi-intro.component';

describe('EdiIntroComponent', () => {
  let component: EdiIntroComponent;
  let fixture: ComponentFixture<EdiIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
