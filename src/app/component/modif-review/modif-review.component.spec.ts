import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifReviewComponent } from './modif-review.component';

describe('ModifReviewComponent', () => {
  let component: ModifReviewComponent;
  let fixture: ComponentFixture<ModifReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
