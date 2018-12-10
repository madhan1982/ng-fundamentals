import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/event.service';
import { ToastrService } from './events/common/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventsService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
