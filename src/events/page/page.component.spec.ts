import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { ListComponent } from '../list/list.component';
import { ItemComponent } from '../item/item.component';

describe('EventPageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponent, ListComponent, ItemComponent ]
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
});
