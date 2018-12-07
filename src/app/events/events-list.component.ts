import { Component } from '@angular/core';
import { EventsService } from './shared/event.service';


@Component ({
selector: 'events-list',
template: `
<div>
    <h1>Upcoming Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor = "let event of events" class="col-md-5">
        <event-thumbnail  [event] = "event"> </event-thumbnail>
       </div>
    </div>
</div>`

})

export class EventsListComponent {
    events: any[];
        constructor(private eventService: EventsService) {
    }


    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleEventClicked(data) {
        console.log('received', data);
    }
    }


