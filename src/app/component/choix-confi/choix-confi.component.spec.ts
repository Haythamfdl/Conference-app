import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixConfiComponent } from './choix-confi.component';

describe('ChoixConfiComponent', () => {
  let component: ChoixConfiComponent;
  let fixture: ComponentFixture<ChoixConfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixConfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixConfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
