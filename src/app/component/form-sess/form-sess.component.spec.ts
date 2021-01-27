import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSessComponent} from './form-sess.component';

describe('FormSessComponent', () => {
  let component: FormSessComponent;
  let fixture: ComponentFixture<FormSessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSessComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
