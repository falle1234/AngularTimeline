import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { ItemComponent } from './item/item.component';

export { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    PageComponent,
    ItemComponent
  ]
})
export class EventsModule { }
