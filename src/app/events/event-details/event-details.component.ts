import { Component } from '@angular/core';
import { EventsService} from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container {padding-left:20px; padding-right: 20px;}
    .event-image {height:100px; }
    `]
})
export class EventDetailsComponent {
    event: any;

    constructor(private eventService: EventsService, private route: ActivatedRoute) {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

}
