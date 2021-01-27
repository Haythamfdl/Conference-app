import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewPapierComponent} from './review-papier.component';

describe('ReviewPapierComponent', () => {
  let component: ReviewPapierComponent;
  let fixture: ComponentFixture<ReviewPapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
