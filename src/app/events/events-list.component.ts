import { Component } from '@angular/core';
import { EventsService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from './common/toastr.service';


@Component ({

template: `
<div>
    <h1>Upcoming Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor = "let event of events" class="col-md-5">
        <event-thumbnail  (click) = "handleThumbnailClick(event.name)" [event] = "event"> </event-thumbnail>
       </div>
    </div>
</div>`

})

export class EventsListComponent {
    events: any[];
        constructor(private eventService: EventsService, private toastr: ToastrService) {
    }


    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleEventClicked(data) {
        console.log('received', data);
    }

    handleThumbnailClick(eventName) {
        this.toastr.toastrSuccess(eventName);
        this.toastr.toastrError(eventName, 'error');
    }
    }


