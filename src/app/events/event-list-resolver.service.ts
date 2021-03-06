import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventsService } from "./shared/event.service";
import {map} from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventsService) {

    }

    resolve(){
        return this.eventService.getEvents().pipe( map (events => events))
    }
}