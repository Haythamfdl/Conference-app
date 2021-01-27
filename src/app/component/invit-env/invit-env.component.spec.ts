import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InvitEnvComponent} from './invit-env.component';

describe('InvitEnvComponent', () => {
  let component: InvitEnvComponent;
  let fixture: ComponentFixture<InvitEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitEnvComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
