import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifConferenceComponent } from './modif-conference.component';

describe('ModifConferenceComponent', () => {
  let component: ModifConferenceComponent;
  let fixture: ComponentFixture<ModifConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
