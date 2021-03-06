import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `<div [routerLink] = "['/events', event.id]" class="well honeywell thumbnail">
    <h2> Name: {{event.name}} </h2>
    <div> Date: {{event.date}} </div>
    <!--<div [ngClass]="{green: event?.time === '8:00 am', orange: event?.time === '10:00 am'}" -->
    <div [ngClass]= "getStartTimeClass()"
    [ngSwitch] = "event?.time"> Time: {{event.time}}
    <span *ngSwitchCase= "'8:00 am'"> (Early Start) </span>
    <span *ngSwitchCase= "'10:00 am'"> (Late Start) </span>
    <span *ngSwitchDefault> (Normal Start) </span>
    </div>
    <div> Price: \${{event.price}} </div>
    <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>

  </div>

    `,
    styles: [`
    .green {color: green !important;}
    .orange {color: orange !important;}
    .bold {font-weight: bold;}
    .thumbnail {min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div {color: #bbb;}
        `]

})

export class EventThumbnailComponent {
    @Input() event: IEvent
    @Output() eventClick = new EventEmitter();


    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        } else if (this.event && this.event.time === '10:00 am') {
            return ['orange', 'bold'];
        } else {
            return [];
        }
    }

}
