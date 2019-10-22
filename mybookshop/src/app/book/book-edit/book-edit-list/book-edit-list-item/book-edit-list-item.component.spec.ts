import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditListItemComponent } from './book-edit-list-item.component';

describe('BookEditListItemComponent', () => {
  let component: BookEditListItemComponent;
  let fixture: ComponentFixture<BookEditListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
