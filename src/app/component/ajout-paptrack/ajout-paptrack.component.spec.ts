import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPaptrackComponent } from './ajout-paptrack.component';

describe('AjoutPaptrackComponent', () => {
  let component: AjoutPaptrackComponent;
  let fixture: ComponentFixture<AjoutPaptrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPaptrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPaptrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
