import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixConfpComponent } from './choix-confp.component';

describe('ChoixConfpComponent', () => {
  let component: ChoixConfpComponent;
  let fixture: ComponentFixture<ChoixConfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixConfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixConfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
