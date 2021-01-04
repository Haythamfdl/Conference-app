import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSessComponent } from './modif-sess.component';

describe('ModifSessComponent', () => {
  let component: ModifSessComponent;
  let fixture: ComponentFixture<ModifSessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
