import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpInputNumberComponent } from './dp-input-number.component';

describe('DpInputNumberComponent', () => {
  let component: DpInputNumberComponent;
  let fixture: ComponentFixture<DpInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
