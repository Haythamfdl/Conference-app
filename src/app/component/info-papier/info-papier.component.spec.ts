import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InfoPapierComponent} from './info-papier.component';

describe('InfoPapierComponent', () => {
  let component: InfoPapierComponent;
  let fixture: ComponentFixture<InfoPapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
