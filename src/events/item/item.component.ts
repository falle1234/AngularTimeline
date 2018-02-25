import { Component, Input } from '@angular/core';
import { EventItem } from '../models/eventItem';

@Component({
  selector: 'events-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: EventItem;

  constructor() { }

}
