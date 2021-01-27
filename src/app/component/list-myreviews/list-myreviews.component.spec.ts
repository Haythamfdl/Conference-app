import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListMyreviewsComponent} from './list-myreviews.component';

describe('ListMyreviewsComponent', () => {
  let component: ListMyreviewsComponent;
  let fixture: ComponentFixture<ListMyreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMyreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
