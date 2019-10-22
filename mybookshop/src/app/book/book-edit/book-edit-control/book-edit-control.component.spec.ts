import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditControlComponent } from './book-edit-control.component';

describe('BookEditControlComponent', () => {
  let component: BookEditControlComponent;
  let fixture: ComponentFixture<BookEditControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
