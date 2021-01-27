import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModifPapierComponent} from './modif-papier.component';

describe('ModifPapierComponent', () => {
  let component: ModifPapierComponent;
  let fixture: ComponentFixture<ModifPapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
