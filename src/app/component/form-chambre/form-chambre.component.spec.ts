import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChambreComponent } from './form-chambre.component';

describe('FormChambreComponent', () => {
  let component: FormChambreComponent;
  let fixture: ComponentFixture<FormChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
