import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercontrolsComponent } from './filtercontrols.component';

describe('FiltercontrolsComponent', () => {
  let component: FiltercontrolsComponent;
  let fixture: ComponentFixture<FiltercontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
