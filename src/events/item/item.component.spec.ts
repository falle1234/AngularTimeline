import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent as EventItemComponent } from './item.component';

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    component.item = {type: 'TESTTYPE',  decription: 'DESCRIPTION', id: 1337};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
