import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisblenavComponent } from './invisblenav.component';

describe('InvisblenavComponent', () => {
  let component: InvisblenavComponent;
  let fixture: ComponentFixture<InvisblenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvisblenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisblenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
