import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { EventItem } from '../models/eventItem';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'events-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  events: EventItem[];
  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(events => this.events = events);
  }
}
