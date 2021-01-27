import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModifHotelComponent} from './modif-hotel.component';

describe('ModifHotelComponent', () => {
  let component: ModifHotelComponent;
  let fixture: ComponentFixture<ModifHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
