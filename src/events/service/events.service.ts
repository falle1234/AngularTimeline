import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { EventItem } from '../models/eventItem';
import { EVENTS } from '../data/events';

@Injectable()
export class EventsService {

  constructor() { }

  getAllEvents(): Observable<EventItem[]> {
    return of(EVENTS);
  }
}
