import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesconfComponent } from './list-mesconf.component';

describe('ListMesconfComponent', () => {
  let component: ListMesconfComponent;
  let fixture: ComponentFixture<ListMesconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMesconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMesconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
