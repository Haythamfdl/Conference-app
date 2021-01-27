import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModifTrackComponent} from './modif-track.component';

describe('ModifTrackComponent', () => {
  let component: ModifTrackComponent;
  let fixture: ComponentFixture<ModifTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
