import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/event.service';
import { ToastrService } from './events/common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent,
  ],

  providers: [
    EventsService, 
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactiveCreateEvent',
      useValue: checkDirtyStage
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyStage(component: CreateEventComponent) {
  if(component.isDirty){
    return window.confirm('Are you sure yuou want to cancel this? ');
    return true;
  }

}