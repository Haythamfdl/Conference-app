import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixConfComponent } from './choix-conf.component';

describe('ChoixConfComponent', () => {
  let component: ChoixConfComponent;
  let fixture: ComponentFixture<ChoixConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
