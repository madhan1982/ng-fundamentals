import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 100px;}
  @media (max-width: 1200px) {#searchForm {display:none}}
  `]
})
export class EventsAppComponent {
  title = 'App' ;
}
