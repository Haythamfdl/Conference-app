import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSconfComponent} from './form-sconf.component';

describe('FormSconfComponent', () => {
  let component: FormSconfComponent;
  let fixture: ComponentFixture<FormSconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSconfComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
