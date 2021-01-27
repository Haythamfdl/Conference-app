import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModifSconfComponent} from './modif-sconf.component';

describe('ModifSconfComponent', () => {
  let component: ModifSconfComponent;
  let fixture: ComponentFixture<ModifSconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
