import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModifTopicComponent} from './modif-topic.component';

describe('ModifTopicComponent', () => {
  let component: ModifTopicComponent;
  let fixture: ComponentFixture<ModifTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
