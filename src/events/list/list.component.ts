import { Component, Input } from '@angular/core';

import { EventItem } from '../models/eventItem';

@Component({
  selector: 'events-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() events: EventItem[];
  constructor() { }
}
