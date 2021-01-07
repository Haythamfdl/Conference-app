import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReviewComponent } from './info-review.component';

describe('InfoReviewComponent', () => {
  let component: InfoReviewComponent;
  let fixture: ComponentFixture<InfoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
