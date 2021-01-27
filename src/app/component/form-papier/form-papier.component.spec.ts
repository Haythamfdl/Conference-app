import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormPapierComponent} from './form-papier.component';

describe('FormPapierComponent', () => {
  let component: FormPapierComponent;
  let fixture: ComponentFixture<FormPapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPapierComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
