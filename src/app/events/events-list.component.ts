import { Component } from '@angular/core';
import { EventsService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from './common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';


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
    events: IEvent[];
        constructor(private eventService: EventsService, private toastr: ToastrService, private route: ActivatedRoute) {
    }


    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
        //this.eventService.getEvents().subscribe(events => {this.events = events})
       // this.events = this.eventService.getEvents();
    }

    handleEventClicked(data) {
        console.log('received', data);
    }

    handleThumbnailClick(eventName) {
        this.toastr.toastrSuccess(eventName);
        this.toastr.toastrError(eventName, 'error');
    }
    }


