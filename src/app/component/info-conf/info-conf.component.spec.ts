import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConfComponent } from './info-conf.component';

describe('InfoConfComponent', () => {
  let component: InfoConfComponent;
  let fixture: ComponentFixture<InfoConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
