import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListSessComponent} from './list-sess.component';

describe('ListSessComponent', () => {
  let component: ListSessComponent;
  let fixture: ComponentFixture<ListSessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSessComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
