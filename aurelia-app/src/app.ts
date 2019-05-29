import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'uPlan';
    config.options.pushState = true;
    config.map([
      {
        route: 'calendar',
        name: 'calendar',
        moduleId: PLATFORM.moduleName('./calendar/calendar'),
        title: 'Calendar'
      },
      {
        route: 'todo',
        name: 'todo',
        moduleId: PLATFORM.moduleName('./todo/todo'),
        title: 'TODO'
      },
      {
        route: ['', 'logon'],
        name: 'logon',
        moduleId: PLATFORM.moduleName('./logon/logon'),
        title: 'Logon'
      }
    ]);

    this.router = router;
  }
}
