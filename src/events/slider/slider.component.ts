import { Component,Input } from '@angular/core';
import { EventItem } from '../models/eventItem';

@Component({
  selector: 'events-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {

  @Input() events: EventItem[];
  
  constructor() { }

}
