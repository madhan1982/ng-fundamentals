import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { EventsService } from "./shared/event.service";


@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventsService) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        this.eventService.getEvent(route.params['id'])
    }

}