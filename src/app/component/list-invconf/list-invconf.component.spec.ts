import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvconfComponent } from './list-invconf.component';

describe('ListInvconfComponent', () => {
  let component: ListInvconfComponent;
  let fixture: ComponentFixture<ListInvconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
