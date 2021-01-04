import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitRecuComponent } from './invit-recu.component';

describe('InvitRecuComponent', () => {
  let component: InvitRecuComponent;
  let fixture: ComponentFixture<InvitRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
