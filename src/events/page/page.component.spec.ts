import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { ListComponent } from '../list/list.component';
import { ItemComponent } from '../item/item.component';

import { EventsService } from '../service/events.service';

describe('EventPageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponent, ListComponent, ItemComponent ],
      providers: [ EventsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    component.events = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain empty events array', () => {
    component.events = [];
    fixture.detectChanges();
    expect(component.events.length).toEqual(0);
  });

  it('should contain nonempty events array when set', () => {
    component.events = [{type: 'test', description: 'test', id: 1}];
    fixture.detectChanges();
    expect(component.events.length).toEqual(1);
  });
});
