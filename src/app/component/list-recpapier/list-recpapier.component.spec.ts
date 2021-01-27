import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListRecpapierComponent} from './list-recpapier.component';

describe('ListRecpapierComponent', () => {
  let component: ListRecpapierComponent;
  let fixture: ComponentFixture<ListRecpapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecpapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecpapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
