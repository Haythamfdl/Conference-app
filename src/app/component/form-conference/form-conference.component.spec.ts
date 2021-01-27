import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormConferenceComponent} from './form-conference.component';

describe('FormConferenceComponent', () => {
  let component: FormConferenceComponent;
  let fixture: ComponentFixture<FormConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
