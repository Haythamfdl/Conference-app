import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMespapierComponent } from './list-mespapier.component';

describe('ListMespapierComponent', () => {
  let component: ListMespapierComponent;
  let fixture: ComponentFixture<ListMespapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMespapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMespapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
