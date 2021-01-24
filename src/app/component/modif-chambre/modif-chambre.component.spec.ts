import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifChambreComponent } from './modif-chambre.component';

describe('ModifChambreComponent', () => {
  let component: ModifChambreComponent;
  let fixture: ComponentFixture<ModifChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
