import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { ItemComponent } from './item/item.component';
import { EventsService } from './service/events.service';
export { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [EventsService],
  declarations: [
    ListComponent,
    PageComponent,
    ItemComponent
  ]
})
export class EventsModule { }
