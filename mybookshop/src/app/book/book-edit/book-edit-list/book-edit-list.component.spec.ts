import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditListComponent } from './book-edit-list.component';

describe('BookEditListComponent', () => {
  let component: BookEditListComponent;
  let fixture: ComponentFixture<BookEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
