import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

import { EVENTS } from '../data/events';

@Component({
  selector: 'events-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  events = EVENTS;
  constructor() { }

  ngOnInit() {
  }

}
