import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListSconfComponent} from './list-sconf.component';

describe('ListSconfComponent', () => {
  let component: ListSconfComponent;
  let fixture: ComponentFixture<ListSconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSconfComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
